import React from 'React';
import {
    StyleSheet,
    View,
    ScrollView,
    Text
} from 'react-native';

import FilmList from '../FilmList';

export default class YourCineScreen extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <FilmList />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
    },
});
