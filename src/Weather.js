import React from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "57b2c40fdae71a6ba41d72685e3226e2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      <div className="container">
        <div className="weather-app">
          <form className="search-form" id="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Type a city"
                  class="form-control"
                  autofocus="on"
                  autocomplete="off"
                  id="search-input"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  class="form-control btn btn-primary shadow-sm"
                />
              </div>
              <div className="col-3">
                <button className="btn btn-success" w-100 id="current-button">
                  Current
                </button>
              </div>
            </div>
          </form>
          <h1 id="city">Chicago, Illinois</h1>
          <ul>
            <li id="now-date">Monday 17:00</li>
            <li id="weather-description">Cloudy</li>
          </ul>
          <div classname="row">
            <div className="col-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="cloudy icon"
              />
              <span className="temperature" id="current-temperature">
                33
              </span>
              <span className="units">
                <a href={33}>°F</a> | <a href={25}>°C</a>
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 2%</li>
                <li>Humidity: 67%</li>
                <li>Wind: 11 mph</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <em>Sun</em> <br />
              45°
            </div>
            <div className="col-1">
              <em>Mon</em> <br />
              38°
            </div>
            <div className="col-1">
              <em>Tues</em> <br />
              44°
            </div>
            <div className="col-1">
              <em>Wed</em> <br />
              43°
            </div>
            <div className="col-1">
              <em>Thurs</em> <br />
              44°
            </div>
            <div className="col-1">
              <em>Fri</em> <br />
              33°
            </div>
            <div className="col-1">
              <em>Sat</em> <br />
              26°
            </div>
          </div>
        </div>
      </div>
      <script src="src/app.jsx"></script>
      <a href="https://github.com/dtobias05/Blah-Project" class="open-source">
        Open-Source Code
      </a>
      <div className="name">by Denise Tobias</div>
    </div>
  );
}
