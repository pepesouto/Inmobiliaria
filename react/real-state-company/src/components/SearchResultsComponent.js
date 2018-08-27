import React, { Component } from 'react';
import "../css/resultStyle.css";

class SearchResultComponent extends Component {
  render() {
    return(

         <section class="result">
           <div class="imgbox">
             <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/976/97690810.jpg" alt="img1"/>
           </div>
           <div class="description">
             <h3 class="propertyType">ENTIRE APARTMENT</h3>
             <h2 class="address">1 Direccion ficticia, 345.</h2>
             <p class="details">Luminoso, cantidad de dormitorios, cosas, cosas.</p>
           </div> 
         </section>

    )
  }
}

export default SearchResultComponent;

