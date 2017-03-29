import React from 'react';
import {Text} from 'react-native';

import PaginatedListView from 'react-native-paginated-listview';

export default class FilmList extends React.Component{
  constructor(props){
    super(props);
  }

  onFetch(page, count) {
    console.log("Page: ", page);
    return new Promise((resolve, reject) => {
      switch (page) {
        case 1:
          setTimeout(() => resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 500);
          break;
        case 2:
          setTimeout(() => resolve([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), 500);
          break;
        case 3:
          setTimeout(() => resolve([21, 22, 23, 24, 25, 26, 27, 28, 29, 30]), 500);
          break;
        case 4:
          setTimeout(() => resolve([31, 32, 33, 34, 35, 36, 37, 38, 39]), 500);
          break;
      }
    });
  }

  render(){
    return(
      <PaginatedListView
        renderRow={(rowData) => {
          return (<Text style={{height: 50}}>{rowData}</Text>);
        }}
        initialData={["Syafiq", "Hanafee", "Hanafee", "Hanafee", "Hanafee", "Hanafee", "Hanafee", "Hanafee", "Hanafee", "Hanafee", "Hanafee", "Hanafee"]}
        itemsPerPage={10}
        onFetch={this.onFetch}
        />
    )
  }
}
