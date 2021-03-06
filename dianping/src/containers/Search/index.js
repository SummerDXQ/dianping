import React, { Component } from 'react';
import SearchBox from './components/SearchBox'
import PopularSearch from './components/PopularSearch'
import SearchHistory from './components/SearchHistory'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    actions,
    getRelatedKeywords,
    getInputText,
    getHistoryKeywords,
    getPopularKeywords
} from '../../redux/modules/search'

class Search extends Component {
    componentDidMount(){
        const {loadPopularKeywords} = this.props.searchActions;
        loadPopularKeywords()
    }

    handleChangeInput = (text) =>{
        const {setInputText,loadRelatedKeywords} = this.props.searchActions;
        setInputText(text)
        loadRelatedKeywords(text)
    }

    handleClear = ()=>{
        const {clearInputText} = this.props.searchActions
        clearInputText()
    }

    handleCancle = () => {
        this.handleClear();
        this.props.history.goBack();
    }

    handleClickItem = item =>{
        const {setInputText,addHistoryKeyword,loadRelatedShops} = this.props.searchActions;
        setInputText(item.keyword||item)
        addHistoryKeyword(item.keyword||item)
        loadRelatedShops(item.keyword)
        this.props.history.push('/search_result')
    }
    hancleClearHistory=()=>{
        const {clearHistoryKeywords} = this.props.searchActions;
        clearHistoryKeywords()
    }
    componentWillMount(){
        const {clearInputText} = this.props.searchActions;
        clearInputText();
    }
  render() {
    const {inputText,relatedKeywords,popularKeywords,historyKeywords} = this.props
    return (
      <div>
        <SearchBox 
            inputText={inputText}
            relatedKeywords={relatedKeywords}
            onChange={this.handleChangeInput}
            onClear={this.handleClear}
            onClickItem={this.handleClickItem}
            onCancle = {this.handleCancle}
        />
        <PopularSearch
            data={popularKeywords}
            onClickItem={this.handleClickItem}
        />
        <SearchHistory
            data={historyKeywords}
            onClickItem={this.handleClickItem}
            onClear={this.hancleClearHistory}
        />
      </div>
    );
  }
}

const mapStateToProps = (state,props)=>{
    return{
        relatedKeywords:getRelatedKeywords(state),
        inputText:getInputText(state),
        popularKeywords:getPopularKeywords(state),
        historyKeywords:getHistoryKeywords(state)
    }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        searchActions:bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);