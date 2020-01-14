import React, { Component } from "react";
import "./App.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <input type="text" id="input" value={this.props.text} />;
  }
}
