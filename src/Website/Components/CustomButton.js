import React, { Component } from 'react';

export default class CustomButton extends Component {
  render() {
    if (typeof this.props.link !== "undefined" && this.props.link !== null) return (
      <a href={this.props.link}>
          <button className="toWebshop">
            {this.props.text}
          </button>
      </a>
    );

    return (
      <button className="toWebshop" onClick={this.props.onClickCallback}>
        {this.props.text}
      </button>
    );
  }
}
