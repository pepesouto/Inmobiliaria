import React, { Component } from 'react';
import "../css/coverStyle.css";

class RecommendationComponent extends Component {
  render(){
    return(
      <section className="recommendationbox">
        <header className="recommendationHeader">
          <div className="recommendationHeaderText">
            <h2 className="title"> ❤ </h2>
            <h2 className="title"> Busquedas Recomendadas </h2>
          </div>
        </header>
        <div id="recommendedbox" className="recommendedbox"></div>
      </section>
    )
  }
}



export default RecommendationComponent;