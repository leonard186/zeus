import React from 'react';
import {temperatureConvert, localTime} from '../../../Helpers';

class Today extends React.Component {
    render() {
        const symbVal = this.props.symbol;
        const symbol = symbVal ? <span>&#8451;</span> : <span>&#8457;</span>;
        const {name, id, min, max, current_temp, humidity, wind_speed, weather, weather_icon, coord} = this.props.details;
        const icon = `/images/icons/${weather_icon}.png`;
        console.log(localTime(coord));

        return (
            <div className="widget__today">
                <div className="widget__today__icon">
                    <img src={icon} alt={weather}/>
                    <div>{weather}</div>
                </div>
                <div className="widget__today__data">
                    <div className="widget__today__data-time">
                        <span>12</span><span>:</span><span>33</span>
                    </div>
                    <hr />
                    <div className="widget__today__data__stats">
                        <div className="widget__today__data__stats-temp">
                            {Math.round(temperatureConvert(current_temp, symbVal))} <sup>{symbol}</sup>
                        </div>
                        <div className="widget__today__data__stats-details">
                            <div>Humidity:<span>{humidity}<span>%</span></span></div>
                            <div>Wind: <span>{wind_speed}m/s</span></div>
                            <div>High <span>{Math.round(temperatureConvert(max, symbVal))} {symbol}</span></div>
                            <div>Low <span>{Math.round(temperatureConvert(min, symbVal))} {symbol}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Today