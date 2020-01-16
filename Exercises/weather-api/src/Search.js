import React, { Component } from "react";
import "./App.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <input
          type="text"
          id="input"
          value={this.props.text}
          placeholder="Type in a city name"
        />
        <button type="submit" name="find-weather" id="button">
          FIND WEATHER
        </button>
      </>
    );
  }
}
