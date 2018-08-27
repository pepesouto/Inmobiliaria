import React, { Component } from 'react';
import "../css/postStyle.css";

class ContactComponent extends Component {
  render() {
    return(
    <aside className="contactbox">
      <h2>Consultar Anunciante</h2>
      <h4 id="ownerName">Name</h4>
      <h2 id="ownerPhone">Phone Number </h2>
      <form action="">
        <input type="text" placeholder="* Nombre Completo" required/>
        <input type="text" placeholder="* E-mail" required/>
        <input type="text" placeholder=" Telefono"/>
        <input type="text" placeholder="* Escribe tu consulta" required/>
        <button> Enviar</button>
      </form>
    </aside>
    )
  }
}

export default ContactComponent;