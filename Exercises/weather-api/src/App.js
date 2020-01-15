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
import FakeWeather from "./data/FakeWeather.json";

const KEY = "be759a526d138ed13d258b92b788b7fc";
const LINK = "http://api.openweathermap.org/data/2.5/forecast?q=";
const KEY_LINK = "&cnt=8&units=metric&appid=be759a526d138ed13d258b92b788b7fc";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  kelvinToC = kel => {
    return Math.round(parseFloat(kel - 273.15));
  };

  timeFun = timeInSec => {
    const array = timeInSec.split(" ");
    const newArray = array[1].split(":");
    return `${newArray[0]}:${newArray[1]}`;
  };

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search />
        </header>
        <main className="app__main">
          <div>
            <CurrentWeather
              src={drizzle}
              alt={FakeWeather.list[2].weather[0].main}
              weather={FakeWeather.list[7].weather[0].description}
              mintemp={this.kelvinToC(FakeWeather.list[2].main.temp_min)}
              maxtemp={this.kelvinToC(FakeWeather.list[2].main.temp_max)}
              humidity={FakeWeather.list[2].main.humidity}
              pressure={FakeWeather.list[2].main.pressure}
            />
          </div>
          <div id="gridss">
            {FakeWeather.list.map((weath, i) => {
              i++;
              if (i < 9) {
                return (
                  <WeatherToday
                    time={this.timeFun(weath.dt_txt)}
                    src={weath.src}
                    temp={this.kelvinToC(weath.main.temp)}
                  />
                );
              }
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
