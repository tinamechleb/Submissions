import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <input type="text" id="input"></input>
          <button type="submit" name="find-weather">
            FIND WEATHER
          </button>
        </header>
        <main className="app__main">
          <div>
            <img src="https://placekitten.com/200/138"></img>
            <p>overcast clouds</p>
            <h4>
              Temperature <span>10°C to 11°C</span>
            </h4>
            <h6>
              Humidity <span> 78% </span> Pressure <span> 1008.48</span>
            </h6>
          </div>
          <div id="gridss">
            <div>
              <h5>03:00</h5>
              <img src="https://placekitten.com/96/96"></img>
              <h5>8°C</h5>
            </div>
            <div>
              <h5>06:00</h5>
              <img src="https://placekitten.com/96/96"></img>
              <h5>9°C</h5>
            </div>
            <div>
              <h5>09:00</h5>
              <img src="https://placekitten.com/96/96"></img>
              <h5>14°C</h5>
            </div>
            <div>
              <h5>12:00</h5>
              <img src="https://placekitten.com/96/96"></img>
              <h5>17°C</h5>
            </div>
            <div>
              <h5>15:00</h5>
              <img src="https://placekitten.com/96/96"></img>
              <h5>18°C</h5>
            </div>
            <div>
              <h5>18:00</h5>
              <img src="https://placekitten.com/96/96"></img>
              <h5>16°C</h5>
            </div>
            <div>
              <h5>21:00</h5>
              <img src="https://placekitten.com/96/96"></img>
              <h5>13°C</h5>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
