import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import "../css/search-result.css";
import RecordComponent from './RecordComponent';
import SearchResultBoxComponent from './SearchResultBoxComponent';


class SearchResult extends Component{
  render() {
    return (
      <div>
        <nav className="browserbox">
          <input className="browser" name="browser" type="text" placeholder="e.i New York City"/>
        </nav>
        <RecordComponent/>
        <div className="container">
          <SearchResultBoxComponent/>
          <div className="mapbox" id="map"></div>
        </div>
      </div>
    )
  }
}

export default SearchResult
