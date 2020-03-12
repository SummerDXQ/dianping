import React, { Component } from "react";
import "./style.css";

class Remark extends Component {
  render() {
    const {data} = this.props
    return (
      <div className="remark">
        <div className="remark__header">
          Purchase Notes
          <i className="remark__icon" />
        </div>
        <div className="remark__list">
          <dl className="remark__item">
            <dt className="remark__itemTitle">Validity Period</dt>
            <dd className="remark__itemDesc">{data.validityPeriod}</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">Purchase Notes</dt>
    <dd className="remark__itemDesc">{data.purchaseNotes[0].content}</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">Use Time</dt>
            <dd className="remark__itemDesc">{data.purchaseNotes[1].content}</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">Reservation</dt>
            <dd className="remark__itemDesc">
            {data.purchaseNotes[2].content}
            </dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">Rules</dt>
            <dd className="remark__itemDesc">{data.purchaseNotes[3].content}</dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Remark;
