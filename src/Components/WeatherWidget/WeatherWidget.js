import React from 'react';
import Forecast from './Forecast/Forecast';
import Today from './Today/Today';

class WeatherWidget extends React.Component {

    render() {

        return (
            <div className="widget">
                <div className="widget-remove">
                    <img src="./images/icons/2.png" alt="remove"/>
                </div>
                <div className="widget__city">
                    <img src="./images/icons/6.png" alt="location"/>
                    <h2>{this.props.details.name}</h2>
                </div>
                <hr />
                <Today details={this.props.details}/>
                <hr />
                <div className="widget__forecast">
                    <Forecast day="Monday" />
                    <Forecast day="Tuesday" />
                    <Forecast day="Wednesday" />
                    <Forecast day="Thursday" />
                    <Forecast day="Friday" />
                </div>
            </div>
        )
    }
}

export default WeatherWidget