import React, { Component } from 'react';
import logo from "../images/logo.png";
import "../css/headerstyle.css";

class HeaderComponent extends Component {
  render() {
    return(
      <header id="header">
          <a className="logo" href="cover.html">
            <img src={logo} alt="Cabildo 500"/>
          </a>
          <nav className="navs">
            <ul className="opt1">
                <li><a href="">VENTA</a></li>
                <li><a href="">ALQUILER</a></li>
                <li><a href="">PROYECTOS</a></li>
            </ul>
            <ul className="opt2">
                <li><a href="">Contacto</a></li>
                <li><button href="">Publicar</button></li>
                <li><a href="">Iniciar Sesion</a></li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default HeaderComponent;
