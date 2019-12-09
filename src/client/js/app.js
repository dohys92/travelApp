
/* Global Variables */
const baseURL = 'api.geonames.org/citiesJSON?';
const username = 'dohys';
// let apiKey = '&APPID=88337ced041c428aed293147f6dc3a86';

const postData = async ( url, data = {}) => {
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      } catch(error) {
        console.log("error", error);
      }
  }

function countDown(e) {
    // Get User's Departure Date
    setInterval( function(){

      let departureDate = document.getElementById('depart').value;
      const date = new Date(departureDate);
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = date - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("timeLeft").innerHTML = days + " days " + hours + " hours "
      + minutes + " minutes " + seconds + " seconds until your trip begins ";
        
      // If the count down is over, write some text 
      // if (distance < 0) {
      //   clearInterval(x);
      //   document.getElementById("demo").innerHTML = "EXPIRED";
      // }
  
      }, 1000)  
    
};
// http://api.geonames.org/searchJSON?q=london&maxRows=10&username=dohys
function performAction(e) {
  const cityName = document.getElementById('cityname').value;
  let departureDate = document.getElementById('depart').value;
  let unixTime = new Date(departureDate).getTime()/1000;
  console.log(cityName);
  let api = `http://api.geonames.org/searchJSON?q=${cityName}&maxRows=10&username=dohys`;
    getData(api)
      .then(function(data){
        document.getElementById('latitude').innerHTML = "Latitude: " + data.geonames[0].lat;
        document.getElementById('longitude').innerHTML = "Longitude: " + data.geonames[0].lng;
        document.getElementById('country').innerHTML = "Country: " + data.geonames[0].countryName;
        // console.log(data.geonames[0]);
        // postData('/add', {latitude: data.geonames[0].lat, longitude: data.geonames[0].lng, country: data.geonames[0].countryName});
        // updateUI();
        let weatherApi = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9c44cc60fa687b62d9b704f58172275a/${data.geonames[0].lat},${data.geonames[0].lng},${unixTime}`;
        return getData(weatherApi);
        // console.log(getData(weatherApi))
      })
      .then(function(res){
        console.log("DARK SKY API WORKING");
        console.log(res);
        document.getElementById('weather-data').innerHTML = "Weather Forecast: " + res['daily'].data[0].summary;
        document.getElementById('temp-high').innerHTML = "Temperature High: " + res['daily'].data[0].temperatureHigh + " Fahrenheit";
        document.getElementById('temp-low').innerHTML = "Temperature Low: " + res['daily'].data[0].temperatureLow + " Fahrenheit";
      })
    .then(function(res){
      // PIXABAY IMAGE API - Yellow flowers
      // https://pixabay.com/api/?key=14332519-c5c6d6ea63e601977d45e9199&q=yellow+flowers&image_type=photo
      let imgApi = `https://pixabay.com/api/?key=14332519-c5c6d6ea63e601977d45e9199&q=${cityName}&image_type=photo`;
      console.log("IMAGE API")
      console.log(imgApi);
      return getData(imgApi);
    })
    .then(function(res){
      // let pixImage = document.createElement('img');
      console.log(":: PIXABAY API::")
      console.log(res.hits[0].webformatURL);
      document.getElementById('pixabayImage').src = res.hits[Math.floor(Math.random() * 10)].webformatURL;

    })
}

const result = {};

const getData = async (url) => {
    const response = await fetch(url);
    try {
        let data = await response.json();
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

const updateUI = async() => {
  const request = await fetch('/all');
  try {
      const allData = await request.json();
      document.getElementById('latitude').innerHTML = allData.latitude;
      document.getElementById('longitude').innerHTML = allData.longitude;
    document.getElementById('country').innerHTML = allData.country;
  } catch(error) {
      console.log("error",error);
  }
}
// Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

export { countDown }
export { performAction }