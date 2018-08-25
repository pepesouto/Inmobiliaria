import React, { Component } from 'react';
import "../css/postStyle.css";

class InnerHeaderComponent extends Component {
  render() {
    return(
      <div className="innerHeader2">
        <div className="location">
          <h4>Zone:</h4>
          <h4 className="zoneId"></h4>
        </div>
        <nav className="socialMedia">
          <ul>
              <li><img src="../images/facebook.png" alt=" Compartir en Facebook"/></li>
              <li><img src="../images/twitter.png" alt=" Compartir en Twitter"/></li>
              <li><img src="../images/instagram.png" alt="Compartir en Instagram"/> </li>
              <li><img src="images/whastapp.png" alt="Compartir en WhatsApp"/></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default InnerHeaderComponent;