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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weathtoday: [
        { time: "03:00", src: storm, temp: FakeWeather.list[5].main.temp },
        { time: "06:00", src: fog, temp: FakeWeather.list[6].main.temp },
        { time: "09:00", src: fog, temp: FakeWeather.list[7].main.temp },
        { time: "12:00", src: rain, temp: FakeWeather.list[8].main.temp },
        { time: "15:00", src: drizzle, temp: FakeWeather.list[9].main.temp },
        { time: "18:00", src: rain, temp: FakeWeather.list[10].main.temp },
        {
          time: "21:00",
          src: mostlycloudy,
          temp: FakeWeather.list[11].main.temp
        }
      ]
    };
  }

  kelvinToC = kel => {
    return Math.round(parseFloat(kel - 273.15));
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
              weather={FakeWeather.list[2].weather[0].description}
              mintemp={this.kelvinToC(FakeWeather.list[2].main.temp_min)}
              maxtemp={this.kelvinToC(FakeWeather.list[2].main.temp_max)}
              humidity={FakeWeather.list[2].main.humidity}
              pressure={FakeWeather.list[2].main.pressure}
            />
          </div>
          <div id="gridss">
            {this.state.weathtoday.map(weath => (
              <WeatherToday
                time={weath.time}
                src={weath.src}
                temp={this.kelvinToC(weath.temp)}
              />
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
