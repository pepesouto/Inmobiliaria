import React, { Component } from 'react';
import "../css/postStyle.css";

class AmenitiesComponent extends Component {
  render() {
    return(
      <section className="amenities">
        <div className="subtitlebox">
          <h2>Amenities</h2>
        </div>
        <div className="column" >
          <ul id="column1">
          </ul>
        </div>

        <div className="column" >
          <ul id="column2">
          </ul>
        </div>
      </section>  
    )
  }
}

export default AmenitiesComponent;