import React, { Component } from 'react';
import "../css/coverStyle.css";
import Prueba from './Prueba';
import RecommendedPropertyBox from './RecommendedPropertyBox';

class RecommendationComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      properties: []
    }
  }

  crearImagenes = () => {
    return this.state.properties.map((property)=>
        <div className="recommendedproperty" key={property.id}>
          <img src={property.images[0]} />
        </div>
    )
  }

  componentDidMount(){
    fetch('http://localhost:3000/properties?isHighlight=true')
      .then(function(response) {
        return response.json();
      })
      .then((myJson) => {
        let properties = [];
        myJson.forEach(function(element) {
          properties.push(element);
        });
        this.setState({properties});
      });
        
  }
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
        <div id="recommendedbox" className="recommendedbox">
          {this.crearImagenes()}
        </div>
      </section>
    )
  }
}



export default RecommendationComponent;