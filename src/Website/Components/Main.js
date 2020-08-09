import React, { Component } from 'react';

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const MAPS_API_KEY = "AIzaSyBZ8VVIjhSivf5CkGOVyCetgZ0pPsDgwDM";
const MAPS_API_LOCATION = "De+Korenmaat+Zeist";

export default class Main extends Component {
  render() {
    return (
      <main className="main" id="info">
        {/* this anchor is placed above the designated view and under the
          header so that the navbar does not cover the contents of main */}
        <div className="mainColumns mainCol3 mainCol1Mobile">
          <div className="mainColumn">
            <h1>Wie</h1>
            {/* <h2>Zijn De Korenmaat</h2> */}
            <p>Daar waar andere biologische winkels ophouden, gaat de Korenmaat verder.
              De Korenmaat is niet alleen een hele goede biowebwinkel, maar vooral ook een maatschappijvernieuwend initiatief.
              Wij geloven dat we met elkaar het economisch leven een ander gezicht kunnen geven.
              De Korenmaat probeert in de praktijk van alledag te laten zien, dat verantwoordelijkheid en zorg voor elkaar de thema's zouden moeten zijn die centraal staan.
              Wij stellen kritische vragen over de buitensporige rol die het geld in onze samenleving heeft gekregen en kiezen daarom voor een winkel die niet is gebaseerd is op winstmaximalisatie, persoonlijk winstbejag en alle oneigenlijke motieven die daarbij een rol kunnen spelen.
              In onze samenleving wil de Korenmaat op microniveau een kweekvijver zijn voor het ontwikkelen van een nieuwe vorm van economie.
              In samenwerkingsverbanden, tussen klanten, winkeliers en producenten, op weg naar een wereld waarin productie en consumptie met elkaar in evenwicht zijn.
              Vanuit het besef dat met en voor elkaar werken meer welvaart en welzijn oplevert dan opereren vanuit egoïsme.
              Doet u mee?</p>
              <CustomButton text="Bekijk De Video" link="https://youtu.be/jOlPtxCKVKo" />
          </div>
          <div className="mainColumn">
            <h1>Wat</h1>
            {/* <h2>Doet De Korenmaat</h2> */}
            <p>{LOREM} {LOREM}</p>
            <CustomButton text="Ons Assortiment" link="https://dekorenmaat.nl/webshop" />
          </div>
          <div className="mainColumn">
            <h1>Waar</h1>
            {/* <h2>Is De Korenmaat</h2> */}
            <p>Lalalalala Zeist, lalalala Postcodecheck {LOREM} {LOREM}</p>
            <CustomButton text="Naar De Webshop" link="https://dekorenmaat.nl/webshop" />
          </div>
        </div>
        {/* <div className="mainContactInformation" id="contact">
          <h1>Contact</h1>
          <p>{LOREM}</p>
        </div> */}
        {(MAPS_API_KEY !== "") ? <iframe
          className="mainGoogleMapsEmbed"
          id="korenmaatLocationMapsEmbed"
          frameBorder="0"
          src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${MAPS_API_LOCATION}&zoom=15`} allowFullScreen
        /> : null}
      </main>
    );
  }
}

class CustomButton extends Component {
  render() {
    return (
      <div className="mainButtonContainer">
        <button className="toWebshop" onClick={()=>window.location.href=this.props.link}>
          {this.props.text}
        </button>
      </div>
    );
  }
}
