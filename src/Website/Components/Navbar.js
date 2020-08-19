import React, { Component } from 'react';
// import KorenmaatLogo from '../img/huisje-1.png';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navBarLogoLeft">
          {/* <img src={KorenmaatLogo} alt="Logo" /> */}
        </div>
        <div className="navbarContent">
          <span className="navbarTitle">De Korenmaat</span>
        </div>
        <div className="navbarLogoRight">
          <span className="navbarTitleRight">
            Biologische (web) winkel met bezorgservice
          </span>
          {/* <img src={KorenmaatLogo} alt="Logo" /> */}
        </div>
      </nav>
    );
  }
}
