import React from 'react';

const key = '39e928980cac627420e50eb68e76beeb';

const WeatherAPI = {
    async getWeather(city){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    const myJson = await response.json(); //extract JSON from the http response
        console.log(myJson);
    // const response1 = await fetch (`https://cors-anywhere.herokuapp.com/https://weather.api.here.com/weather/1.0/report.json?app_id=DYYZBDfPOy3NDYZNkd56&app_code=_NJz_7NiHToGlnvOss6T5A&product=observation&name=${city}`);
    // const myJson1 = await response1.json();
    // console.log(myJson1);
    return {
            id: myJson.id,
            name: myJson.name,
            min: myJson.main.temp_min,
            max: myJson.main.temp_max,
            current_temp: myJson.main.temp,
            humidity: myJson.main.humidity,
            wind_speed: myJson.wind.speed,
            weather: myJson.weather[0].description,
            weather_icon: myJson.weather[0].icon,
            sunset: myJson.sys.sunset,
            sunrise: myJson.sys.sunrise,
            coord: {
                lat: myJson.coord.lat,
                long: myJson.coord.lon
            }
        }
    }
};

export  const  cityJSON = async () => {
    const response = await fetch("./city.list.json");
    const jsonResponse = await response.json();
    console.log(jsonResponse)
};

export default WeatherAPI;