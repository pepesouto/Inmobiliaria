import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//components
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Main from "./components/Main";
import SearchResult from "./components/SearchResult";
import Post from "./components/Post";
//stylesheets
import './App.css';
import "./css/reset.css";
import "./css/coverStyle.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path="/search-result" component={SearchResult}/>
          <Route path="/post" component={Post}/>
        </Switch>
        <FooterComponent/>
      </div>
    );
  }
}
export default App;
