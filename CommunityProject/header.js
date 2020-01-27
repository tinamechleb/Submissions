import React, { Component } from "react";
import "./style.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div class="nav-bar">
          <a id="currentlyOn" href="index.html">
            Home
          </a>
          <a href="contact.html">Contact Us</a>
          <a href="newsandevents.html">News & Events</a>
          <button id="donate-button" onclick="location.href='./donate.html';">
            Donate
          </button>
        </div>
      </header>
    );
  }
}
