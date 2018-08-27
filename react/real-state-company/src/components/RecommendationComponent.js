import React, { Component } from 'react';
import "../css/coverStyle.css";
import Prueba from './Prueba';
import RecommendedPropertyBox from './RecommendedPropertyBox';

class RecommendationComponent extends Component {
  render(){
    return(
      <section className="recommendationbox">
        <header className="recommendationHeader">
          <div className="recommendationHeaderText">
            <h2 className="title"> ❤ </h2>
            <h2 className="title"> Busquedas Recomendadas </h2>
          </div>
          <Prueba></Prueba>
        </header>
        <RecommendedPropertyBox></RecommendedPropertyBox>
      </section>
    )
  }
}



export default RecommendationComponent;