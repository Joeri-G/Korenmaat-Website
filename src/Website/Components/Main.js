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
              <p>De Korenmaat is een van de eerste biologische webwinkels van Nederland. De Korenmaat werd al in de jaren ‘70 opgericht om vanuit het antroposofische gedachtengoed een ander soort biologische winkel te starten. Werken met oog voor mens en natuur. Inmiddels is de Korenmaat uitgegroeid tot een volwaardige webwinkel voor biologische producten. Maar nog wel met dezelfde idealen. De Korenmaat streeft bij haar werkzaamheden naar de beste service, overleg met klanten en eerlijke prijzen voor zowel de klant als de producent, de boer en de teler. De Korenmaat wordt op dit moment gerund door een team van vijf vennoten en een aantal enthousiaste medewerkers.</p>
                <div className="mainButtonContainer">
                  <CustomButton text="Bekijk De Video" link="https://youtu.be/jOlPtxCKVKo" />
                </div>
            </div>
            <div className="mainColumn">
              <h1>Wat</h1>
             <p>Wij verkopen biologische groente, fruit en zuivel uit de regio. Maar ook heel veel andere biologische producten. In onze webshop vindt u een breed assortiment met meer dan 10.000 producten. Om zo transparant en eerlijk mogelijk te werken, wordt een uniek prijssysteem gebruikt. U ziet in de webshop de inkoopprijzen. Gewoon de prijs die wij ook betalen voor de producten. Bovenop de inkoopprijs komt een vast bedrag per product voor het werk en voor de exploitatiekosten van de winkel. Wij streven niet naar winstmaximalisatie, maar willen een eerlijke prijs voor eerlijke producten.</p>
              <div className="mainButtonContainer">
                <CustomButton text="Ons Assortiment" link="./index.php" />
              </div>
            </div>
            <div className="mainColumn">
              <h1>Waar</h1>
              <p>De Korenmaat werkt op bestelling en levert aan particulieren, bedrijven en instellingen in de regio Zeist - Utrecht. U kunt uw boodschappen afhalen in onze winkel in Zeist. In de winkel kunt u ook ‘shoppen’, maar verkopen wij alleen producten uit onze restvoorraad. Op dinsdag, vrijdag en zaterdag bezorgen wij ook boodschappen. Gekoelde producten kunnen wij bezorgen dankzij onze nieuwe bestelbussen met ingebouwde koelcel. Indien gewenst zetten wij de boodschappen bij u in de koelkast. Dat kan, in overleg, zelfs als u niet thuis bent. Doe hieronder de postcodecheck om te kijken of wij ook bij u bezorgen.</p>
              <div className="mainButtonContainer">
                <CustomButton text="Doe De Postcodecheck" onClickCallback={this.updatePostcodeDisplay} />
              </div>
            </div>
          </div>
          <MapsEmbed MAPS_API_KEY={API_Data.MAPS_API_KEY} MAPS_API_LOCATION={API_Data.MAPS_API_LOCATION} showDNT={false} />
        </main>
      </React.Fragment>
    );
  }
}
