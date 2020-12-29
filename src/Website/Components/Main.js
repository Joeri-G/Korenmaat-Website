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
              <p>De Korenmaat is begin jaren ‘80 opgericht met de gedachte om een natuurvoedingswinkel te starten met een ander economisch model.</p>
              <p>Inmiddels uitgegroeid tot een volwaardige webwinkel voor biologische producten, maar met nog wel dezelfde idealen! Wij streven naar duurzaam consumeren en rechtvaardige prijzen voor zowel de klant als de producent, de boer en de teler.</p>
              <p>De Korenmaat wordt gerund door een team van vijf vennoten en een aantal enthousiaste medewerkers en vrijwilligers.</p>
                <div className="mainButtonContainer">
                  <CustomButton text="Bekijk de video" link="https://youtu.be/jOlPtxCKVKo" />
                </div>
            </div>
            <div className="mainColumn">
              <h1>Wat</h1>
              <p>Groente, fruit, kaas, zuivel, brood; wij hebben een voorkeur voor biologisch-dynamisch en leveren het liefst lokale en regionale producten.<br />
                Maar ook heel veel andere biologische producten vind je in onze uitgebreide webwinkel; van Afwasmiddel tot Zeezout!</p>
              <p>Om transparant te werken gebruiken wij een uniek prijssysteem. In onze webwinkel vermelden wij de inkoopprijzen. Dat zijn gewoon de prijzen die de Korenmaat ook betaalt aan haar leveranciers. Bovenop de inkoopprijs komt een vast bedrag per product. Dat is voor het werk wat wij aan uw boodschappen hebben en is nodig om de winkel draaiende te houden.</p>
              <div className="mainButtonContainer">
                <CustomButton text="Ons assortiment" link="./index.php" />
              </div>
            </div>
            <div className="mainColumn">
              <h1>Waar</h1>
              <p>Wij werken op bestelling en leveren aan particulieren, bedrijven en instellingen in de provincie Utrecht.</p>
              <p>Iedere week rijden wij op dinsdag, vrijdag en zaterdag met onze bestelbussen door de regio om boodschappen zo vers mogelijk te bezorgen. </p>
              <p>Bestellingen zijn ook af te halen in onze winkel aan de Dijnselweg in Zeist.<br />Op dinsdag en vrijdag zijn wij open van 16.00&nbsp;–&nbsp;19.00 uur en zaterdag van 09.00&nbsp;–&nbsp;13.00 uur. Tijdens winkelopening is het mogelijk om producten uit onze voorraad te kopen.</p>
              <p>Voor bezorgen: doe hieronder de postcodecheck!</p>
              <div className="mainButtonContainer">
                <CustomButton text="Doe de postcodecheck" onClickCallback={this.updatePostcodeDisplay} />
              </div>
            </div>
          </div>
          <MapsEmbed MAPS_API_KEY={API_Data.MAPS_API_KEY} MAPS_API_LOCATION={API_Data.MAPS_API_LOCATION} showDNT={false} />
        </main>
      </React.Fragment>
    );
  }
}
