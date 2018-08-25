import React, { Component } from 'react';
import "../css/postStyle.css";

class MainInfoComponent extends Component {
  render() {
    return(
      <section className="mainInfo">         
        {/* <ul>
            <li><2 bedroom></li>
            <li>1 Ambiente</li>
            <li>1 Bathroom</li>
            <li>35m2</li>
        </ul> */}
        <ul>
            <li><i className="fas fa-bed"></i></li>
            <li><i className="fas fa-dumbbell"></i></li>
            <li><i className="fas fa-bath"></i></li>
            <li><i className="fas fa-swimming-pool"></i></li>
        </ul>
      </section>
    )
  }
}

export default MainInfoComponent;