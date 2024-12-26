# Weather 
> Weather website by using HTML, CSS, JAVASCRIPT & API of [openweather.org](https://openweathermap.org/current)

## API key 
```javascript
let apiKey = "Your API Key";
```

## This Code Convert Longitude & Latitude Into City Name
```javascript
     if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    } else {
      // Browser doesn't support Geolocation
      weather("pune"); // Set default location to pune
    }

    // Get latitude and longitude
   async function successFunction(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var map = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=5&appid=${apiKey}`)
      var data1 = await map.json();
      
      let loc = data1[0].name;

      weather(loc)
    }

    function errorFunction() {
      // Error in getting location
      weather("pune"); 
    }
```
## Live Demo

You can view the live demo of the project by visiting the following links:

- **Demo**: [Demo](https://kaushalsahu07.github.io/Templates/weather-app/index.html)


## how it's look lik
![Screenshot 2024-12-26 at 7 07 39 AM](https://github.com/user-attachments/assets/4b0664f1-f9ee-4e5b-9a20-d47678c229c7)

> By Clicking To Location Icon You Can Search Any City
