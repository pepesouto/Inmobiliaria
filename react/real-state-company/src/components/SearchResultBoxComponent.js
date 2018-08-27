import React, { Component } from 'react';
import "../css/resultStyle.css";

class SearchResultBoxComponent extends Component {
  constructor(props){
    super(props)
    this.state={
      elements: []
    }
  }

  createResults = () => {
    return this.state.elements.map((element)=>
      <section className="result" key={element.id}>
        <div className="imgbox">
          <img src={element.images[0]}/>
        </div>
        <div className="description">
          <a className="type" href= {"post.html?id=" + element.id}>{element.name} </a>
          <h2 className="title">{element.address}</h2>
          <p className="text">{element.description}</p>
        </div> 
      </section>
    )
  }

  componentDidMount(){
    fetch('http://localhost:3000/properties')
      .then(function(response) {
        return response.json();
      })
      .then((myJson) => {
        let elements = [];
        myJson.forEach(function(element) {
          elements.push(element);
        });
        this.setState({elements});
      });
        
  }
  render() {
    return(
      <article className="resultsbox">
        {this.createResults()}
      </article>  
    )
  }
}

export default SearchResultBoxComponent;

