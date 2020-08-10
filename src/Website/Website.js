import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './css/Master.css';

export default class Website extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => console.log("By Joeri Geuzinge. https://www.joerigeuzinge.nl"), 1000);
  }
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Header />
        <Main/>
        <Footer/>
      </React.Fragment>
    );
  }
}
