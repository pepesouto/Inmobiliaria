import React, { Component } from 'react';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
// ------COVER
// import BarComponent from "./components/BarComponent";
// import RecommendationComponent from "./components/RecommendationComponent";

// ------COVER

// -----RESULTS
// import SearchResultComponent from "./components/SearchResultsComponent";
// -----RESULTS

import './App.css';
import "./css/reset.css";
import "./css/coverStyle.css";

// -----RESULTS
// import "./css/search-result.css";
// import RecordComponent from './components/RecordComponent';
// -----RESULTS


// -----POST
import SliderComponent from "./components/SliderComponent";
import ContactComponent from "./components/ContactComponent";
import "./css/postStyle.css";
// -----POST

class App extends Component {
  render() {
    return (

// -----COVER
      // <div className="App">
      //   <HeaderComponent></HeaderComponent>
      //   <article className="box">
      //     <section className="slogan">
      //         <h1>Alquiler y venta de apartamentos y casas en Uruguay</h1>
      //     </section>        
      //     <BarComponent></BarComponent>
      //   </article>
      //   <RecommendationComponent></RecommendationComponent>     
      //   <FooterComponent></FooterComponent>
      // </div>
// -----COVER

// -----RESULTS
      // <body>

      //   <HeaderComponent></HeaderComponent>
      
      //   <nav className="browserbox">
      //     <input className="browser" name="browser" type="text" placeholder="e.i New York City"/>
      //   </nav>

      //   <RecordComponent></RecordComponent>

      //   <div className="container">
      //     <article class="resultsbox">
      //       <SearchResultComponent></SearchResultComponent> 
      //       <SearchResultComponent></SearchResultComponent>
      //       <SearchResultComponent></SearchResultComponent> 
      //       <SearchResultComponent></SearchResultComponent>
      //       <SearchResultComponent></SearchResultComponent>
      //     </article>  
      //     <div className="mapbox" id="map"></div>

      //   </div>

      //   <FooterComponent></FooterComponent>
      // </body>

// -----RESULTS

// -----POST
        <body>

        <HeaderComponent></HeaderComponent>

        <header className="innerHeader">
            <h1 className="postTitle"id="postTitle"></h1>
        </header>

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

        <div  className="box">

          <SliderComponent></SliderComponent>

          <ContactComponent></ContactComponent>


        </div> 

        <div className="infobox">

            <section className="mainInfo">
                
                {/* <ul>
                    <li><2 bedroom></li>
                    <li>1 Ambiente</li>
                    <li>1 Bathroom</li>
                    <li>35m2</li>
                </ul> */}
                <ul>
                    <li><i className="fas fa-bed"></i></li>
                    <li><i className="fas fa-dumbbell"></i></li>
                    <li><i className="fas fa-bath"></i></li>
                    <li><i className="fas fa-swimming-pool"></i></li>
                </ul>
            </section>

            <br></br>

            <section className="datasheet">
                <div className="subtitlebox">
                    <h2>Data Sheet</h2>
                </div>
                <div className="column">
                    <ul>
                        <li>Id: <span id="id">Ask them!</span>  </li>
                        <li>Zone: <span className="zoneId">Ask them!</span> </li>
                        <li>Address: <span id="address">Ask them!</span> </li>
                        <li>Bathroom(s): <span id="bathroom">Ask them!</span> </li>
                        <li>Bedroom(s): <span id="bedroom">Ask them!</span> </li>
                        <li>Pet Friendly: <span id="petFriendly">Ask them!</span> </li>
                       
                    </ul>
                </div>

                <div className="column">
                    <ul>
                        <li>Property Type: <span id="propertyType">Ask them!</span> </li>
                        <li>Operation Type: <span id="operationType">Ask them!</span> </li>
                        <li>Size: <span id="size">Ask them!</span> </li>
                        <li>Garage: <span id="garage">Ask them!</span> </li>
                        <li>Luminosity: <span id="light">Ask them!</span> </li>
                        <li>Air Conditioning: <span id="AC">Ask them!</span> </li>
                    </ul>
                </div>
            </section>

            <section className="amenities">
                <div className="subtitlebox">
                    <h2>Amenities</h2>
                </div>
                <div className="column" >
                    <ul id="column1">
                    </ul>
                </div>

                <div className="column" >
                    <ul id="column2">
                    </ul>
                </div>
            </section>

            <section className="description">
                <div className="subtitlebox">
                    <h2>Description</h2>
                </div>
                <p id="description"></p>
            </section>

        
            <FooterComponent></FooterComponent>


        </div>
        </body>
// -----POST

    );
  }
}

export default App;
