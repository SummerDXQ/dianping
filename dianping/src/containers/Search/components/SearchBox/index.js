import React, { Component } from 'react';
import './style.css'


class SearchBox extends Component {
  handleClickItem = (item)=>{
    this.props.onClickItem(item)
  }

  handleChange = (e) => {
    this.props.onChange(e.target.value)
  }

  handleClear = () => {

    this.props.onClear();
  }

  handleCancel = () => {
    this.props.onCancle()
  }

  render() {
    const {inputText,relatedKeywords} = this.props
    return (
      <div className="searchBox">
        <div className="searchBox__container">
            <input 
                className="searchBox__text" 
                value={inputText} 
                onChange={this.handleChange}
                placeholder='Search'
            />
          <span className="searchBox__clear" onClick={this.handleClear}></span>
          <span className="searchBox__cancel" onClick={this.handleCancel}>Cancel</span>
        </div>
        {relatedKeywords.length>0 ? this.renderSuggestList() : null}
      </div>
    );
  }

  renderSuggestList() {
    const {relatedKeywords} = this.props
    return (
      <ul className="searchBox__list">
        {
          relatedKeywords.map(item => {
            return (
              <li className="searchBox__item" onClick={()=>this.handleClickItem(item)} key={item.id}>
                <span className="searchBox__itemKeyworkd">{item.keyword}</span>
                <span className="searchBox__itemQuantity">{item.quantity}results</span>
              </li>
            )
          })
        }
        
      </ul>
    )
  }

  
}

export default SearchBox;