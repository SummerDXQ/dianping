import React, { Component } from 'react';
import SearchHeader from "./components/SearchHeader"
import KeywordBox from "./components/KeywordBox"
import Banner from "../../components/Banner"
import ShopList from "./components/ShopList"
import { getSearchShops, getCurrentKeyword } from '../../redux/modules/search';
import {connect} from 'react-redux'

class SearchResult extends Component {
  render() {
    const {shops,currentKeyword}=this.props;
    return (
      <div>
        <SearchHeader onBack={this.handleBack} onSearch={this.handleSearch}/>
        <KeywordBox text={currentKeyword}/>
        <Banner dark />
        { shops? <ShopList data={shops}/>:null}
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

const mapStateToProps=(state,props)=>{
  return{
    shops:getSearchShops(state),
    currentKeyword:getCurrentKeyword(state)
  }
}
export default connect(mapStateToProps,null)(SearchResult);