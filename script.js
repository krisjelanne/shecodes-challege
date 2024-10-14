function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-input");
    let cityElement = document.querySelector(".current-city");
    let city = searchInput.value;
    cityElement.innerHTML = searchInput.value;
    let apiKey = "af645t00bbc7e3co535a2e952451ad49";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function displayTemperature(response) {
    let currentTempDisplay = document.querySelector(".current-temperature-value");
    let temperature = Math.round(response.data.temperature.current);
    currentTempDisplay.innerHTML = temperature;
    cityElement.innerHTML = response.data.city;
  }
  function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
  
  let currentDate = document.querySelector("#current-date");
  let currentdate = new Date();
  currentDate.innerHTML = formatDate(currentdate);
  
  