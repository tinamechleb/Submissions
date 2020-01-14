import React, { Component } from "react";
import "./App.css";

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <img src={this.props.src} alt={this.props.alt}></img>
        <p> {this.props.weather}</p>
        <h4>
          Temperature <span>{this.props.span}</span>
        </h4>
        <h6>
          Humidity <span> 78% </span> Pressure <span> 1008.48</span>
        </h6>
      </div>
    );
  }
}
