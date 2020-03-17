import React, { Component } from 'react';
import SearchHeader from "./components/SearchHeader"

class SearchResult extends Component {
  render() {
    return (
      <div>
        <SearchHeader onBack={this.handleBack} onSearch={this.handleSearch}/>
      </div>
    );
  }
}

export default SearchResult;