import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import SliderComponent from "./SliderComponent";
import ContactComponent from "./ContactComponent";
import InnerHeaderComponent from "./InnerHeaderComponent";
import "../css/postStyle.css";
import MainInfoComponent from './MainInfoComponent';
import DataSheetComponent from './DataSheetComponent';
import AmenitiesComponent from './AmenitiesComponent';
import DescriptionComponent from './DescriptionComponent';


class Post extends Component{
  render(){
    return(
      <div>
        <header className="innerHeader">
          <h1 className="postTitle"id="postTitle">Post Title</h1>
        </header>
        <InnerHeaderComponent></InnerHeaderComponent>
        <div  className="box">
          <SliderComponent></SliderComponent>
          <ContactComponent></ContactComponent>
        </div>
        <div className="infobox">
          <MainInfoComponent></MainInfoComponent>
          <DataSheetComponent></DataSheetComponent>
          <AmenitiesComponent></AmenitiesComponent>
          <DescriptionComponent></DescriptionComponent>
        </div>
      </div>
    )
  }
}

export default Post
