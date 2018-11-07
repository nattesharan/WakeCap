import SearchBar from 'material-ui-search-bar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
class SearchBox extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
            margin: '0 auto',
            maxWidth: 500,
            marginLeft: 170,
            width:750,
            borderRadius:40
          }}
        />
      </MuiThemeProvider>
    )
  }
}
export default SearchBox;
