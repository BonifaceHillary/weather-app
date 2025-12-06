const apiKey = "0c766df5fb31d773daebe25a36b7e9cb";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");

    const searchBtn = document.querySelector(".search button");

    const weatherIcon = document.querySelector(".weather-icon")

    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if(response.status == 404){
        document.querySelector(".error").style.display = "block";

        document.querySelector(".weather").style.display = "none"

      }else{

          var data = await response.json();

      document.querySelector(".city").innerHTML = data.name;

      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

      document.querySelector(".wind").innerHTML =data.wind.speed + " km/h";

      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/sun4.avif";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "images/sun1.png";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "images/sun2.webp";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/sun3.png";
    }

    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/sun5.png";
    }

    document.querySelector(".weather").style.display = "block";

      }
      var data = await response.json();

      document.querySelector(".city").innerHTML = data.name;

      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

      document.querySelector(".wind").innerHTML =data.wind.speed + " km/h";

      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/sun4.avif";

    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "images/sun1.png";

    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "images/sun2.webp";

    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/sun3.png";

    }

    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/sun5.png";
    }

    document.querySelector(".weather").style.display = "block";

     document.querySelector(".error").style.display = "none";

  }
    searchBtn.addEventListener("click", ()=>{
      checkWeather(searchBox.value);
    })
