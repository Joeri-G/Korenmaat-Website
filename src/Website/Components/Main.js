import React, { Component } from 'react';
import CustomButton from './CustomButton';
import Postcodecheck from './Postcodecheck';
import MapsEmbed from './MapsEmbed';
import API_Data from './API_Data';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPostalcodeModal: false
    }
    this.updatePostcodeDisplay = this.updatePostcodeDisplay.bind(this);
  }

  updatePostcodeDisplay = () => {
    this.setState({displayPostalcodeModal: !this.state.displayPostalcodeModal});
  }

  render() {
    return (
      <React.Fragment>
        {(this.state.displayPostalcodeModal) ? <Postcodecheck close={this.updatePostcodeDisplay} /> : null}
        <main className="main" id="info">
          {/* this anchor is placed above the designated view and under the
            header so that the navbar does not cover the contents of main */}
          <div className="mainColumns mainCol3 mainCol1Mobile">
            <div className="mainColumn">
              <h1>Wie</h1>
              <p>De Korenmaat is een van de eerste biologische webwinkels van Nederland. Maar dan net even anders. De Korenmaat werd al in de jaren 70 opgericht door een groep mensen die vanuit het antroposofische gedachtengoed een ander soort biologische winkel wilden starten. Werken met oog voor mens en natuur. Voor een eerlijker economisch systeem, wordt een uniek betaalsysteem gebruikt.</p>
                <div className="mainButtonContainer">
                  <CustomButton text="Bekijk De Video" link="https://youtu.be/jOlPtxCKVKo" />
                </div>
            </div>
            <div className="mainColumn">
              <h1>Wat</h1>
              <p>Wij verkopen biologische groente en fruit uit de buurt. Maar ook andere natuurlijke producten die je bij een biologische supermarkt vindt. Wij halen zoveel mogelijk producten van telers op minder dan 12 kilometer afstand. En als het uit de Noordoostpolder of de Betuwe komt, dan zorgen we ervoor dat we de boer kennen.</p>
              <div className="mainButtonContainer">
                <CustomButton text="Ons Assortiment" link="https://dekorenmaat.nl/webshop" />
              </div>
            </div>
            <div className="mainColumn">
              <h1>Waar</h1>
              <p>U kunt uw boodschappen afhalen in onze winkel in Zeist. Maar wij bezorgen ook in de regio. Ook gekoelde producten kunnen wij bezorgen dankzij onze bestelbussen met ingebouwde koelcel. En indien u het wenst zetten wij uw boodschappen in de koelkast. Dat kan in overleg zelfs als u niet thuis bent! Doe hieronder de postcodecheck om te kijken of wij bij u bezorgen.</p>
              <div className="mainButtonContainer">
                <CustomButton text="Doe De Postcodecheck" onClickCallback={this.updatePostcodeDisplay} />
              </div>
            </div>
          </div>
          <MapsEmbed MAPS_API_KEY={API_Data.MAPS_API_KEY} MAPS_API_LOCATION={API_Data.MAPS_API_LOCATION} />
        </main>
      </React.Fragment>
    );
  }
}
