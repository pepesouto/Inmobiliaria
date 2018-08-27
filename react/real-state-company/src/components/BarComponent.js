import React, { Component } from 'react';
import "../css/barStyle.css"

class BarComponent extends Component{
  render(){
    return(
      <article className="box">
        <section className="slogan">
          <h1>Alquiler y venta de apartamentos y casas en Uruguay</h1>
        </section>
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
      </article>
    )
  }
}

export default BarComponent;
