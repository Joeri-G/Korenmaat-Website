import React, { Component } from 'react';
import CustomButton from './CustomButton';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="headerCard toWebshop">
          <h1>De Korenmaat</h1>
          <p>Lekker Biologisch,<br/>Lekker Eigenwijs!</p>
          <CustomButton text="Meer informatie" link="#info" />
          <CustomButton text="Naar de webshop" link="./index.php" />
        </div>
      </header>
    );
  }
}
