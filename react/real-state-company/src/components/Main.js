import React, {Component} from 'react';
import BarComponent from "./BarComponent";
import RecommendationComponent from "./RecommendationComponent";

class Main extends Component {
  render(){
    return(
      <div>
        <BarComponent/>
        <RecommendationComponent/>
      </div>
    )
  }
}

export default Main
