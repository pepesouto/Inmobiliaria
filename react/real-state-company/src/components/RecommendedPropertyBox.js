import React, { Component } from 'react';
import "../css/coverStyle.css";
import Prueba from './Prueba';

class RecommendedPropertyBox extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     images:[],
  //   };
  // }

  // componentDidMount(){
  //   fetch('http://localhost:3000/properties?id=5')
  //   .then(results => {
  //     return results.json();
  //   }).then(data => {
  //     let images = data.results.map((pic) => {
  //       return(
  //         <div key={pic.results}>
  //           <img src={pic[1]} />
  //         </div>
  //       )
  //     })
  //     this.setState({images:images});
  //     console.log("state", this.state.images);
  //   })
  // }


  render(){
    return(
      <div id="recommendedbox" className="recommendedbox">
        {/* {this.state} */}
      </div>
    )
  }
}



export default RecommendedPropertyBox;