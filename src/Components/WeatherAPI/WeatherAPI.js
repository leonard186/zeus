import React from 'react';
import {temperatureConvert} from '../../Helpers';

const key = '39e928980cac627420e50eb68e76beeb';

const WeatherAPI = {
        async getWeather(city){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
        const myJson = await response.json(); //extract JSON from the http response
            return {
            id: myJson.id,
            name: myJson.name,
            min: temperatureConvert(myJson.main.temp_min, 'c'),
            max: temperatureConvert(myJson.main.temp_max, 'c'),
            current_temp: temperatureConvert(myJson.main.temp, 'c'),
            humidity: myJson.main.humidity,
            wind_speed: myJson.wind.speed,
            weather: myJson.weather[0].main
        };
    }
};

export  const  cityJSON = async () => {
    const response = await fetch("./city.list.json");
    const jsonResponse = await response.json();
    console.log(jsonResponse)
};

export default WeatherAPI;