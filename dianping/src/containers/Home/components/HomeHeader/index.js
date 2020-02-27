import React, { Component } from 'react';
import "./style.css"

class HomeHeader extends Component {
  render() {
    return (
      <div className="homeHeader">
        <header className="homeHeader__wrapper">
          <a className="homeHeader__city">Melbourne</a>
          <a className="homeHeader__search">Input store、location</a>
          <a className="homeHeader__self">
            <div className="homeHeader__portrait"/>
          </a>
        </header>
      </div>
    );
  }
}

export default HomeHeader;