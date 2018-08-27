import React, { Component } from 'react';
import "../css/postStyle.css";

class DataSheetComponent extends Component {
  render() {
    return(
      <section className="datasheet">
        <div className="subtitlebox">
            <h2>Data Sheet</h2>
        </div>
        <div class="columns">
          <div className="column">
            <ul>
              <li>Id: <span id="id">Ask them!</span>  </li>
              <li>Zone: <span className="zoneId">Ask them!</span> </li>
              <li>Address: <span id="address">Ask them!</span> </li>
              <li>Bathroom(s): <span id="bathroom">Ask them!</span> </li>
              <li>Bedroom(s): <span id="bedroom">Ask them!</span> </li>
              <li>Pet Friendly: <span id="petFriendly">Ask them!</span> </li>        
            </ul>
          </div>

          <div className="column">
            <ul>
              <li>Property Type: <span id="propertyType">Ask them!</span> </li>
              <li>Operation Type: <span id="operationType">Ask them!</span> </li>
              <li>Size: <span id="size">Ask them!</span> </li>
              <li>Garage: <span id="garage">Ask them!</span> </li>
              <li>Luminosity: <span id="light">Ask them!</span> </li>
              <li>Air Conditioning: <span id="AC">Ask them!</span> </li>
            </ul>
          </div>
        </div>  
      </section>
    )
  }
}

export default DataSheetComponent;