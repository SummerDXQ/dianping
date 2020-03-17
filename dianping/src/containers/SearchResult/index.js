import React, { Component } from 'react';
import SearchHeader from "./components/SearchHeader"
import KeywordBox from "./components/KeywordBox"

class SearchResult extends Component {
  render() {
    return (
      <div>
        <SearchHeader onBack={this.handleBack} onSearch={this.handleSearch}/>
        <KeywordBox text="text"/>
      </div>
    );
  }

  handleBack = () => {
    this.props.history.push('/')
  }

  handleSearch = () => {
    this.props.history.push('/search')
  }
}

export default SearchResult;