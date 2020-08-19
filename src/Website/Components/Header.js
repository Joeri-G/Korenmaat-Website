import React, { Component } from 'react';
import CustomButton from './CustomButton';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="headerCard toWebshop">
          <h1>De Korenmaat</h1>
          <p>Lekker Biologisch,<br/>Lekker Eigenwijs!</p>
          <CustomButton text="Meer Informatie" link="#info" />
          <CustomButton text="Naar De Webshop" link="https://dekorenmaat.nl/webshop" />
        </div>
      </header>
    );
  }
}
