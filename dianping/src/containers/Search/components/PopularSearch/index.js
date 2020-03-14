import React, { Component } from 'react';
import "./style.css"

class PopularSearch extends Component {
    handleClick = (item) =>{
        this.props.onClickItem(item);
    }
  render() {
    const {data} = this.props;
    return (
      <div className="popularSearch">
        {
          data.map((item,index) => {
            return (
              <span 
                key={index} 
                className="popularSearch__item"
                onClick={()=>this.handleClick(item)}
            >{item.keyword}</span>
            )
          })
        }
      </div>
    );
  }
}

export default PopularSearch;