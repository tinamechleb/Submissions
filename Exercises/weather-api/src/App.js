import React, { Component } from "react";
import "./App.css";
import clear from "../src/img/weather-icons/clear.svg";
import cloudy from "../src/img/weather-icons/cloudy.svg";
import drizzle from "../src/img/weather-icons/drizzle.svg";
import fog from "../src/img/weather-icons/fog.svg";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../src/img/weather-icons/partlycloudy.svg";
import rain from "../src/img/weather-icons/rain.svg";
import snow from "../src/img/weather-icons/snow.svg";
import storm from "../src/img/weather-icons/storm.svg";
import unknown from "../src/img/weather-icons/unknown.svg";

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
            <img src={mostlycloudy} alt="clear-icon"></img>
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
              <img src={mostlycloudy}></img>
              <h5>8°C</h5>
            </div>
            <div>
              <h5>06:00</h5>
              <img src={mostlycloudy}></img>
              <h5>9°C</h5>
            </div>
            <div>
              <h5>09:00</h5>
              <img src={clear}></img>
              <h5>14°C</h5>
            </div>
            <div>
              <h5>12:00</h5>
              <img src={clear}></img>
              <h5>17°C</h5>
            </div>
            <div>
              <h5>15:00</h5>
              <img src={clear}></img>
              <h5>18°C</h5>
            </div>
            <div>
              <h5>18:00</h5>
              <img src={clear}></img>
              <h5>16°C</h5>
            </div>
            <div>
              <h5>21:00</h5>
              <img src={mostlycloudy}></img>
              <h5>13°C</h5>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
