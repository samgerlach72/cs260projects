// Getting all of the fish
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=565ee758a4d3bf87351d91c7a3c5978f";
fetch(url)
.then(function(response) {
  return response.json();
}).then(function(json) {	
  let results = "";
  results += '<h2>Weather in ' + json.name + " Today:</h2>";
  results += "<div class='split first'>";
  for (let i=0; i < json.weather.length; i++) {
  results += '<h2>' + json.main.temp + " &deg;F</h2>";
    results += '<div class="image">' + '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>' + '</div>';
  }
  results += "<p>";
  for (let i=0; i < json.weather.length; i++) {
      results += 'Description: ' + json.weather[i].description;
      if (i !== json.weather.length - 1)
        results += ", ";
  }
  results += "</p>";
  results += "</div>";
  
  results += "<div class='split second'>";
  results += '<p>High: ' + json.main.temp_min + " &deg;F</p>";
  results += '<p>Low: ' + json.main.temp_min + " &deg;F</p>";
  results += "<p>Wind: " + json.wind.speed + " mph</p>";
  results += '<p>Sunrise: ' + timeConverter(json.sys.sunrise) + "</p>";
  results += '<p>Sunrise: ' + timeConverter(json.sys.sunset) + "</p>";
  results += "</div>";
  document.getElementById("weatherResults").innerHTML = results;
});