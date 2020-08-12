import React, { Component } from 'react';
import Postcodes from '../postcodes.json';

/*
Postcodecheck
De postcode ranges worden opgeslagen in src/Website/postcodes.json.
Hier kunnen nieuwe ranges aan toe worden gevoegd door een object met een min en een max waarde aan het array toe te voegen
bv:
[
  {"min": 1000, "max": 1050} <= standaard range
]

[
  {"min": 1000, "max": 1020},
  {"min": 1030, "max": 1050} <= niewe range, nu wordt 1031 t/m 1039 niet meer geaccepteerd
                                NOTE: let op de commas. Meer informatie over JSON:
                                https://www.w3schools.com/whatis/whatis_json.asp
                                https://www.json.org/json-en.html
]
*/

export default class Postcodecheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postcodeRanges: Postcodes,
      hasFeedbackMessage: false,
      feedbackMessage: "",
      success: false,
      openModal: true,
      finishedAnimation: false
    };
  }

  ANIMATION_DURATION = 150;

  componentDidMount() {
    setTimeout(() => this.setState({finishedAnimation: true}), this.ANIMATION_DURATION);
  }

  checkNieuwePostcode = (e) => {
    let inputValue = e.target.value;
    if (inputValue.length < 4) return null;
    let postcodeString = inputValue.slice(0, 4); // if the string is more than 4 chars extract the first few
    let postcode = Number(postcodeString);
    if (isNaN(postcode) || postcode === null || inputValue.length > 6) {
      this.setState({
        hasFeedbackMessage: true,
        feedbackMessage: <p className="ongeldigePostcode">De opgegeven postcode is ongeldig.</p>,
        success: false
      });
      return null;
    }
    for (const range of this.state.postcodeRanges) {
      if (postcode >= range.min && postcode <= range.max) {
        this.setState({
          hasFeedbackMessage: true,
          feedbackMessage:  <React.Fragment>
                              <p className="geldigePostcode">U woont binnen ons bezorggebied!</p>
                              <p>U kunt zich <a href="https://www.dekorenmaat.nl/webshop/create_account.php">hier</a> opgeven.</p>
                              <p>Kijk <a href="https://www.dekorenmaat.nl/informatie.html" onClick={(e) => {
                                e.preventDefault();
                                if (!window.open(e.target.href,'','resizable=no,location=no,menubar=no,scrollbars=yes,status=no,toolbar=no,fullscreen=no,dependent=no,width=750,height=750,left=750,top=250,status')) window.location.href = e.target.href;
                              }}>hier</a> voor de bezorgtijden voor uw gebied</p>
                            </React.Fragment>,
          success: true
        });
        return null;
      }
    }
    this.setState({
      hasFeedbackMessage: true,
      feedbackMessage:  <React.Fragment>
                          <p>Wij bezorgen (nog) niet in uw postcodegebied. </p>
                          <p>U kunt uw bestelling in de winkel komen ophalen tijdens onze openingstijden of een e-mailbericht sturen om ons op de hoogte te brengen van uw interesse, zodat wij u kunnen berichten bij uitbreiding van het bezorggebied.</p>
                          <p>Bent u een nieuwe klant en wilt u uw bestelling komen ophalen? Dan is het nodig dat u eerst telefonisch of per e-mail met ons contact opneemt. Pas daarna kunnen wij uw bestelling verwerken.</p>
                        </React.Fragment>,
      success: false
    });
  }

  zoomOutAnimation = () => {
    if (this.state.finishedAnimation) {
      this.setState({openModal: false});
      setTimeout(this.props.close, this.ANIMATION_DURATION);
      return null;
    }
    setTimeout(() => {
      this.setState({openModal: false});
    }, this.ANIMATION_DURATION);
    setTimeout(this.props.close, this.ANIMATION_DURATION * 2);

  }

  render() {
    let postcodeStatus = null;
    if (this.state.hasFeedbackMessage && this.state.success) postcodeStatus = "validPostcode";
    if (this.state.hasFeedbackMessage && !this.state.success) postcodeStatus = "invalidPostcode";

    return (
      <React.Fragment>
        <div className={(this.state.openModal) ? "Postcodecheck ZoomInAnimation" : "Postcodecheck ZoomOutAnimation"}>
          <h1>Postcodecheck</h1>
          <input placeholder="Uw Postcode (1234AB)" onChange={this.checkNieuwePostcode} className={postcodeStatus}/>
          {(this.state.hasFeedbackMessage) ? this.state.feedbackMessage : null}
        </div>
        <div className="PostcodecheckBackground" onClick={this.zoomOutAnimation}/>
      </React.Fragment>
    );
  }
}
