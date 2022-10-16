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
var city = "Houston";
var requestLatLon = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + apiKey ;
//var requestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey;


fetch(requestLatLon)
  .then(function (response) {
    console.log(response.json());
    return;
 })




