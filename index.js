"use strict";

const API_KEY = "3d316cd1e306a0b3ec217f842c41263f",
    MOUNTS_ALL = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ],
    searchInput = document.querySelector(".search-city"),
    searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", function () {
    renderCardWeather(searchInput.value);
});

const renderCardWeather = (city) => {
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=ru`,
    )
        .then((responce) => {
            return responce.json();
        })
        .then((data) => {
            document.body.innerHTML = `
      <div class="weather-city">
        <div class="weather-city__inner">
          <h2 class="weather-city__city" aria-label="${data.name}">${
                data.name
            }</h2>
          <div class="weather-city__img">
            <img src="https://openweathermap.org/img/wn/${
                data.weather[0].icon
            }@2x.png" alt="cloud" />
          </div>
          <div class="weather-city__body">
            <div class="weather-city__today">Сегодня, ${new Date().getDate()} ${
                MOUNTS_ALL[new Date().getMonth()]
            }</div>
            <div class="weather-city__deg"><span>${Math.floor(
                data.main.temp - 273
            )}</span></div>
            <div class="weather-city__weather">${
                data.weather[0].description
            }</div>
            <div class="weather-city__wind weather">
              <p class="weather__label">Ветер</p>
              <p class="weather__count">${data.wind.speed} km/h</p>
            </div>
            <div class="weather-city__hum weather">
              <p class="weather__label">Влажность</p>
              <p class="weather__count">${data.main.humidity} %</p>
            </div>
          </div>
        </div>
      </div>
    `
        });
};
