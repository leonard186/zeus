export const temperatureConvert = (kelvin, symbol) => {
    return symbol ?  kelvin - 273.15 :  ((kelvin - 273.15) * 9/5 + 32);
};

export const localTime = async (coord) => {
  // const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' })
  // console.log('now: ' + now);
  // if(sunrise && sunset) {
  //     const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  //     const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  //     console.log('sunrise: ' + sunriseTime);
  //     console.log('sunset: ' + sunsetTime);
  // }

    const BingMapsAPIKey = 'AoL-Q6tv0cy7xttYDLv20hmzrmkvWj5EHhyRFNlPlYvTysnqwXa54PhZ_dENmzep';
    const timeZone = await fetch(`https://cors-anywhere.herokuapp.com/https://dev.virtualearth.net/REST/v1/TimeZone/${coord.lat},${coord.long}?datetime=${(new Date()).toUTCString()}&key=${BingMapsAPIKey}`);

    const jsonResponse = await timeZone.json();
    const tz = jsonResponse.resourceSets[0].resources[0].timeZone.ianaTimeZoneId;
 console.log(new Date().toLocaleString('en-US', { timeZone: tz, hour: '2-digit', minute:'2-digit' }))

};