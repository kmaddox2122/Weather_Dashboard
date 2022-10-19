//weather api

//pseudocode
//java todo's:
//connect to open weather map api
//pull weather data (city name, the date, an icon representation of weather conditions, 
//the temperature, the humidity, and the wind speed) to display to the right of search bar.
//pull 5-day forecast that displays the date, an icon representation of weather conditions, 
//the temperature, the wind speed, and the humidity to display below initial weather data.
//use local storage to keep search history in bootstrap card on left of page
//write function to link search history location to current and future weather for that city

var apiKey = config.apiKey;
// var city ='';

var fetchButton = document.querySelector(".btn");

//function to pull lat and lon for second api request
function getApi (){
  city = document.getElementById('search-input').value;
  console.log(city);
  var requestLatLon = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey ;

  fetch(requestLatLon)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("lat and lon");
    getWeather(data[0].lat, data[0].lon);
  });
}
// current day forecase function
function getWeather (lat,lon) {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + apiKey;
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var date = data.list[0].dt_txt.split(' ')[0].split('-');
      date = date[1] + '/' + date[2] + '/' + date[0];
      console.log(date);
      var datecontainer = document.getElementById('dateResults');
      datecontainer.innerHTML = `
      ${date}`
    var temp = data.list[0].main.temp
      var tempContainer = document.getElementById('tempResults');
      tempContainer.innerHTML = `
      ${temp}`
    var windSpeed = data.list[0].wind.speed;
      console.log(windSpeed);
      var windContainer = document.getElementById('windResults');
      windContainer.innerHTML = `
      ${windSpeed}`
    var humidity = data.list[0].main.humidity;
      console.log(humidity);
      var humidityContainer = document.getElementById('humidityResults');
      humidityContainer.innerHTML = `
      ${humidity}`
    var cityName = data.city.name;
      console.log(cityName);
      var cityNameContainer = document.getElementById('locationResults');
      cityNameContainer.innerHTML = `
      ${cityName}`
  });
}

fetchButton.addEventListener('click', getApi);

// 5 day forecast function

// for (var i = 0; i < 41; i+8)


//for 5 day forecast- will need to pull every 8th object in the array

  /* use async and await fetch to store data from api fetch in a variable. 
  async function getApi(requestUrl) {
    let response = await fetch(requestUrl);
    let prettyData = await response.json();
    return prettyData;
  }   
*/