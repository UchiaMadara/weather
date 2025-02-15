const city = document.getElementById("location");
const temperature = document.getElementById("temp");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const input = document.getElementById("input");
const button = document.getElementById("btn");
const icon = document.getElementById("weather-icon");

const weather = async () => {
  const inputs = input.value;
  try {
    const url = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=a766f589d3657ac549d890a87051ab5a&units=metric&q=${inputs}`
    );
    const data = await url.json();
    console.log(data);
    city.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = Math.round(data.wind.speed) + " km/h";

    if (data.weather[0].main == "Clouds") {
      icon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Sunny") {
      icon.src = "./images/sunny.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      icon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "./images/snow.png";
    }
  } catch {}
};

button.addEventListener("click", () => {
  weather();
});
