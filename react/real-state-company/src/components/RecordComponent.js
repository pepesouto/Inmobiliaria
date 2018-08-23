import React, { Component } from 'react';
import "../css/resultStyle.css";

class RecordComponent extends Component {
  render() {
    return(
      <div className="innerHeader" id="innerHeader">
        <span id="propertyType">Houses</span> <span> ></span>
        <span id="operationType">Rent</span> <span> ></span>
        <span id="zoneId">Pocitos</span>
      </div>

    )
  }
}

export default RecordComponent;