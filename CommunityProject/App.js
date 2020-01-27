import React, { Component } from "react";
import "./style.css";
import Header from "./header.js";
import Footer from "./footer.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </>
    );
  }
}
