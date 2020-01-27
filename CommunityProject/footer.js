import React, { Component } from "react";
import "./style.css";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer>
        <div class="footer-grid">
          <div>
            <p>info@helpchildren.com</p>
            <p>+961 123 456</p>
            <p>Beirut, Lebanon</p>
            <div class="logos">
              <div class="facebook">
                <a href="#"></a>
              </div>
              <div class="instagram">
                <a href="#"></a>
              </div>
              <div class="twitter">
                <a href="#"></a>
              </div>
              <div class="linkedin">
                <a href="#"></a>
              </div>
            </div>
          </div>
          <div class="footer-grid-2">
            <p>
              <a href="#">Careers</a>
            </p>
            <p>
              <a href="#">Our partners</a>
            </p>
          </div>
          <div>
            <p>
              <a href="./index.html">Home</a>
            </p>
            <p>
              <a href="./contact.html">Contact Us</a>
            </p>
            <p>
              <a href="./newsandevents.html">News & Events</a>
            </p>
            <p>
              <a href="./donate.html">Donate</a>
            </p>
          </div>
        </div>
        <div id="priv-policy">
          <a href="#">privacy policy</a> - <a href="#">terms of use</a>
        </div>
        <div id="rights">© 2020 HelpChildren.com - All rights reserved.</div>
      </footer>
    );
  }
}
