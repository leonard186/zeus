import React from 'react';

class Today extends React.Component {
    render() {
        const {name, id, min, max, current_temp, humidity, wind_speed, weather} = this.props.details;

        return (
            <div className="widget__today">
                <div className="widget__today__icon">
                    <img src="/images/icons/33.png" alt="sunny"/>
                </div>
                <div className="widget__today__data">
                    <div className="widget__today__data-time">
                        <span>12</span><span>:</span><span>33</span>
                    </div>
                    <hr />
                    <div className="widget__today__data__stats">
                        <div className="widget__today__data__stats-temp">
                            <span>{Math.round(current_temp)}<sup>&#8451;</sup></span>
                        </div>
                        <div className="widget__today__data__stats-details">
                            <div>Humidity:<span>{humidity}<sup>%</sup></span></div>
                            <div>Wind: <span>{wind_speed}m/s</span></div>
                            <div>Weather: <span>{weather}</span></div>
                            <div>High <span>{max}</span></div>
                            <div>Low <span>{min}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Today