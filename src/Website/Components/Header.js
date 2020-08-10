import React, { Component } from 'react';
// import DownArrow from '../img/down-arrow.svg';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="headerCard toWebshop">
          <h1>De Korenmaat</h1>
          <p>Lekker Biologisch<br/>Lekker Eigenwijs!</p>
          <button onClick={() => {
            window.location.href = "#info"
          }}>Meer Informatie</button>
          <button onClick={() => {
            window.location.href = "/webshop"
          }}>Naar De Webshop</button>
          <p className="webshop_lies">De Webshop Wordt Binnenkort Gerenoveerd!</p>
        </div>
      </header>
    );
  }
}
