import React, { Component } from 'react';
import "./style.css"

class ShopInfo extends Component {
  render() {
    const {data} = this.props
    return (
      <div className="shopInfo">
        <div className="shopInfo__header">
          Users（{data.shopIds.length}）
          <span className="shopInfo__arrow"></span>
        </div>
        <div className="shopInfo__middle">
          <div className="shopInfo__middleLeft">
            <div className="shopInfo__shopName">
            {data.shop}
            </div>
            <div className="shopInfo__starsWrapper">
              <span className="shopInfo__stars">
              <i className="shopInfo__stars--red" style={{"width": "100%"}}></i>
              </span>
              <span className="shopInfo__distance">>{data.distance}</span>
            </div>
          </div>
          <div className="shopInfo__middleRight">
            <i className="shopInfo__phoneIcon"></i>
          </div>
        </div>
        <div className="shopInfo__bottom">
          <i className="shopInfo__locationIcon"></i>{data.address}
        </div>
      </div>
    );
  }
}

export default ShopInfo;