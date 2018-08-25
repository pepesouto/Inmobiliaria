import React, { Component } from 'react';
import "../css/postStyle.css";

class DescriptionComponent extends Component {
  render() {
    return(
      <section className="description">
        <div className="subtitlebox">
            <h2>Description</h2>
        </div>
        <p id="description"></p>
      </section>  
    )
  }
}

export default DescriptionComponent;