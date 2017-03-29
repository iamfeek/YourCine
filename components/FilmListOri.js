import React from 'react';
import {
    ListView,
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

import InfiniteScrollView from 'react-native-infinite-scroll-view';

import RowFilmList from '../components/RowFilmList';

export default class FilmList extends React.Component {
    constructor(props) {
        super(props);

        this._data = [];

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows([]),
            total: 0,
            pageIndex: 0,
            canLoadMoreContent: true
        };

        // console.log('XDE')

        // this._loadMoreContentAsync = this._loadMoreContentAsync.bind(this);
    }

    _loadMoreContentAsync = async () => {
        console.log('_loadMoreContentAsync', this.state.canLoadMoreContent)
        let domain = "https://tainoistesting.azurewebsites.net";
        let path = "/api/v1/common/movies";
        fetch(`${domain}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "PageIndex": this.state.pageIndex,
                "PageSize": 20,
                "Keyword": "",
                "FilmType": 0,
                "Country": "",
                "ReleaseYear": "",
                "OrderBy": "",
                "SortBy": "",
                "Genres": 0,
                "IsTheater": false
            })
        })
            .then(response => response.json())
            .then(response => response.data)
            .then(response => {
                this._data = this._data.concat(response.data);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(this._data),
                    total: response.total,
                    pageIndex: this.state.pageIndex + 1,
                    canLoadMoreContent: true
                });
                // the line below evaluates to false. tahts why.
                // console.log(this._data.length >= ((this.state.pageIndex + 1) * 20));
            })
    };

    componentWillMount() {
        this._loadMoreContentAsync();
    }

    render() {
        console.log("Render canLoadMore: " + this.state.canLoadMoreContent);
        return (
            <ListView
                renderScrollComponent={props => <InfiniteScrollView {...props} />}
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={(data) => <RowFilmList {...data} />}
                canLoadMore={this.state.canLoadMoreContent}
                onLoadMoreAsync={this._loadMoreContentAsync.bind(this)}
                renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});