function loadDate() {
<<<<<<< HEAD
  var currentDate = new Date();
  var dateString = currentDate.toString()
    .split(" ")
    .splice(0, 4) // making the string contain only the first four words
    .join(" ");
=======
  var currentDate = new Date(); 
  var dateString = currentDate.toString()
                     .split(" ") 
                     .splice(0, 4) // making the string contain only the first four words
                     .join(" "); 
>>>>>>> b946ee9c2779499445b3f630751d53c021367d8c

  $("#date").text(dateString);
}

function loadWeather() {
  var weather = $("#weather");
  var url = "https://api.forecast.io/forecast/"; // Dark Sky API url
<<<<<<< HEAD
  var apiKey = "YOUR API KEY"; // API key from Dark Sky
}

function success(position) {
  var latitude = position.coords.latitude; // latitude using geolocation
  var longitude = position.coords.longitude; // longitude using geolocation

// API request:
  $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
    weather.text("Based on your current location, it is " + data.currently.temperature + "° F right now");
  });
}

// This message is displayed if their is a geolocation error:
function error() {
  alert("Unable to retrieve your location for weather");
}

// calling the geolocation API
navigator.geolocation.getCurrentPosition(success, error);

// the text that will be displayed while the function is making the request
weather.text("fetching weather...");
}

function loadNews() {
  var news = $("#news");
  var url = "https://newsapi.org/v1/articles?source=google‐news&sortBy=top&apiKey="; // News API url
  var apiKey = "YOUR API KEY"; // API key from News API
}

  $.getJSON(url + apiKey, function(data) {
    // map() method to call article urls and titles
=======
  var apiKey = "73184cf35b05f08df85a58bfd68cfc0c"; // API key from Dark Sky

  function success(position) {
    var latitude = position.coords.latitude; // latitude using geolocation
    var longitude = position.coords.longitude; // longitude using geolocation

    // API request:
    $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      weather.text("Based on your current location, the current weather conditions are:\r\n" + "Temperature: " + data.currently.temperature + "° F\r\nHumidity: " + data.currently.humidity + "in. Hg.");
    });
  }

  // This message is displayed if their is a geolocation error:
  function error() {
    alert("Unable to retrieve your location for weather");
  }

  // calling the geolocation API
  navigator.geolocation.getCurrentPosition(success, error);

  // the text that will be displayed while the function is making the request
  weather.text("fetching weather...");
}

function loadNews1() {
  var news = $("#news1");
  var url = "https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey="; // News API url
  var apiKey = "2a8e891933ad4f5aba875888a4f2ed1f"; // API key from News API

  $.getJSON(url + apiKey, function(data) {

    // map() method to call article urls and titles

    var titles = data.articles.map(function(articles) {
      return "<a href='" + articles.url + "'>" + articles.title + "</a>";
    });

     // joining the titles with two line breaks

    news.html(titles.join("<br><br>"));
  });

  // the text that will be displayed while the function is making the request
  news.text("fetching news..."); 
}

function loadNews2() {
  var news = $("#news2");
  var url = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey="; // News API url
  var apiKey = "2a8e891933ad4f5aba875888a4f2ed1f"; // API key from News API

  $.getJSON(url + apiKey, function(data) {

    // map() method to call article urls and titles

>>>>>>> b946ee9c2779499445b3f630751d53c021367d8c
    var titles = data.articles.map(function(articles) {
      return "<a href='" + articles.url + "'>" + articles.title + "</a>";
    });

<<<<<<< HEAD
    // joining the titles with two line breaks
=======
     // joining the titles with two line breaks

>>>>>>> b946ee9c2779499445b3f630751d53c021367d8c
    news.html(titles.join("<br><br>"));
  });

  // the text that will be displayed while the function is making the request
<<<<<<< HEAD
  news.text("fetching news...");
}

// Call the above functions
loadDate();
loadWeather();
loadNews();
=======
  news.text("fetching news..."); 
}

loadDate();
loadWeather();
loadNews1();
loadNews2();
>>>>>>> b946ee9c2779499445b3f630751d53c021367d8c
