import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SliderComponent from "./components/SliderComponent";
import ContactComponent from "./components/ContactComponent";
import InnerHeaderComponent from "./components/InnerHeaderComponent";
import "./css/postStyle.css";
import MainInfoComponent from './components/MainInfoComponent';
import DataSheetComponent from './components/DataSheetComponent';
import AmenitiesComponent from './components/AmenitiesComponent';
import DescriptionComponent from './components/DescriptionComponent';


class Post extends Component(
  render(){
    return(){
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
    }
  }

)

export default SearchResult
