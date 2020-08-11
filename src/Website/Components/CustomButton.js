import React, { Component } from 'react';

export default class CustomButton extends Component {
  render() {
    if (typeof this.props.link === "string" && this.props.link !== "") return (
      <a href={this.props.link} className="button toWebshop">
          {this.props.text}
      </a>
    );

    return (
      <a href="#nowhere" className="toWebshop button" onClick={(e) => {
        e.preventDefault();
        this.props.onClickCallback();
      }}>
        {this.props.text}
      </a>
    );
  }
}
