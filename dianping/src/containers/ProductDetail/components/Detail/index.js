import React, { Component } from 'react';
import "./style.css"

class Detail extends Component {
  render() {
    console.log('---------detail--------')
    // console.log(this.props.data)
    const {data} = this.props;
    return (
      <div className="detail">
        <div className="detail__header">
          <span>Group Buy Detail</span>
          <i className="detail__headerIcon"></i>
        </div>
        <table cellPadding="0" cellSpacing="0" className="detail__table">
          <tbody>
            <tr className="detail__row">
              <th colSpan="3" className="detail__category">
                {data.detail.category}
              </th>
            </tr>
            <tr className="detail__row">
              <td>{data.detail.products[0].name}</td>
              <td className="detail__td--alignRight">
              {data.detail.products[0].quantity}
              </td>
              <td className="detail__td--alignRight">
              ${data.oldPrice}
              </td>
            </tr>
            <tr className="detail__row">
              <td/>
              <td className="detail__td--price">
                Original price
                <br/>
                <strong className="detail__td--priceNew">
                group purchase price
                </strong>
              </td>
              <td className="detail__td--price">
              ${data.oldPrice}
                <br/>
                <strong className="detail__td--priceNew">
                ${data.currentPrice}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="detail__remark">
        {data.detail.remark}
        </div>
        <div className="detail__more">
          <span>More Information</span>
          <span className="detail__notice">(Free WIFI)</span>
          <i className="detail__arrow"/>
        </div>
      </div>
    );
  }
}

export default Detail;