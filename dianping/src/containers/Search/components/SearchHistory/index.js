import React, { Component } from 'react';
import "./style.css"

class SearchHistory extends Component {

  render() {
    const {data} = this.props;
    console.log(data)
    return (
      <div className="searchHistory">
        <div className="searchHistory__header">Search History</div>
        <ul className="searchHistory__list">
          {
            data.map((item, index) =>{
              return <li key={item} onClick={()=>this.handleClick(item)}className="searchHistory__item">
                {item}
              </li>
            })
          }
        </ul>
        <div className="searchHistory__clear" onClick={this.handleClear}>Clear Search History</div>
      </div>
    );
  }

  handleClick = (item) => {
    this.props.onClickItem(item)
  }

  handleClear = () => {
    this.props.onClear()
  }

}

export default SearchHistory;