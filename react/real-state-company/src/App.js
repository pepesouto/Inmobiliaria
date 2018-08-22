import React, { Component } from 'react';
import HeaderComponent from "./components/HeaderComponent";
import logo from './logo.svg';
import './App.css';
import "./css/reset.css";
import "./css/coverStyle.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>


          <article className="box">

              <section className="slogan">
                  <h1>Alquiler y venta de apartamentos y casas en Uruguay</h1>
              </section>

              <section className="content">
                <form className="bar" method = "get" action="search-result.html">
                    <div className="innerbox">
                      <select className="operation" name="operationType" id="operationId">
                              <option value="Sale">Venta</option>
                              <option value="Rent">Alquiler</option>
                              <option value="Temporary">Alquiler Temporal</option>
                      </select>

                      <select className="property" name="propertyType" id="typeId">
                              <option value="House">Casas</option>
                              <option value="Apartment">Apartamentos</option>
                              <option value="Land">Terrenos</option>
                              <option value="locales">Locales Comerciales</option>
                              <option value="oficinas">Oficinas</option>
                      </select>
                    </div>

                    <input className="ubication" id="zoneId" type="text" name="zoneId" placeholder="Ubicacion ej: Pocitos, Montevideo"/>

                    <button className="btn" id="buscar">Buscar</button>

                </form>
              </section>
          </article>

          <section className="recommendationbox">
            <header className="recommendationHeader">
              <div className="recommendationHeaderText">
                <h2 className="title"> ❤ </h2>
                <h2 className="title"> Busquedas Recomendadas </h2>
              </div>
            </header>

            <div id="recommendedbox" className="recommendedbox"></div>
          </section>

          <footer id="footer"></footer>

          <script src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossorigin="anonymous"></script>
          <script src="js/coverdynamicload.js"></script>
      </div>
    );
  }
}

export default App;
