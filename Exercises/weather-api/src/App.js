import React, { Component } from "react";
import "./App.css";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather.js";
import WeatherToday from "./WeatherToday";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search text="Search" />
          <button type="submit" name="find-weather">
            FIND WEATHER
          </button>
        </header>
        <main className="app__main">
          <div>
            <CurrentWeather
              src={mostlycloudy}
              alt="clear icon"
              weather="overcast clouds"
              span="10°C to 11°C"
            />
          </div>
          <div id="gridss">
            <div>
              <WeatherToday time="03:00" src={mostlycloudy} temp="8" />
            </div>
            <div>
              <WeatherToday time="06:00" src={mostlycloudy} temp="9" />
            </div>
            <div>
              <WeatherToday time="09:00" src={clear} temp="14" />
            </div>
            <div>
              <WeatherToday time="12:00" src={clear} temp="17" />
            </div>
            <div>
              <WeatherToday time="15:00" src={clear} temp="18" />
            </div>
            <div>
              <WeatherToday time="18:00" src={clear} temp="16" />
            </div>
            <div>
              <WeatherToday time="21:00" src={mostlycloudy} temp="13" />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
