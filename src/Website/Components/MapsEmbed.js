import React, { Component } from 'react';
import CustomButton from './CustomButton';

export default class MapsEmbed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // add the prop showDNT to the element to show a DNT compliant message
      showGoogleMapsEmbed: !this.props.showDNT
    }
    console.log(this.props.showDNT);
  }

  componentDidMount() {
    // check the browsers DNT
    if (
      (typeof navigator.doNotTrack === 'undefined' || navigator.doNotTrack !== "1") ||
      (navigator.doNotTrack === "1" && accessCookie("showRegardlessOfDNT") === "1")
    ) this.setState({showGoogleMapsEmbed: true});
  }

  UserHasDNT = () =>
    <div className="mainGoogleMapsEmbed doNotTrackMessage">
      <p>Deze website maakt gebruik Google Maps embeds maar omdat uw browser een Do Not Track signaal verstuurd hebben wij deze tijdelijk uitgezet.</p>
      <p>U kan deze hier onder weer inschakelen.</p>
      <p><CustomButton text="Inschakelen" onClickCallback={() => {
        this.setState({showGoogleMapsEmbed: true});
        createCookie('showRegardlessOfDNT', '1', 365);
      }}/></p>
    </div>

  GoogleMapsEmbed = () =>
    <iframe
      className="mainGoogleMapsEmbed"
      title="korenmaatLocationMapsEmbed"
      frameBorder="0"
      src={`https://www.google.com/maps/embed/v1/place?key=${this.props.MAPS_API_KEY}&q=${this.props.MAPS_API_LOCATION}&zoom=15`} allowFullScreen
    />

  render() {
    return (
      (this.state.showGoogleMapsEmbed) ? <this.GoogleMapsEmbed/> : <this.UserHasDNT/>
    );
  }
}

function createCookie(cookieName,cookieValue,daysToExpire) {
  let date = new Date();
  date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
  document.cookie = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + "; expires=" + date.toGMTString() + "; SameSite=Strict; Secure";
}

function accessCookie(cookieName) {
  let name = encodeURIComponent(cookieName) + "=";
  let allCookieArray = document.cookie.split(';');
  for (let i=0; i < allCookieArray.length; i++) {
    let temp = allCookieArray[i].trim();
    if (temp.indexOf(name) === 0)
    return temp.substring(name.length, temp.length);
  }
  return "";
}
