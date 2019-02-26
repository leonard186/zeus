import React from 'react';
import Forecast from './Forecast/Forecast';
import Today from './Today/Today';

class WeatherWidget extends React.Component {

    handleRemove = () => {
        console.log('active');
        console.log('id: ' + this.props.details.name);
      this.props.removeWidget(this.props.details.name.toLowerCase());
    };

    render() {

        return (
            <div className="widget">
                <div className="widget-remove" onClick={this.handleRemove} >
                    <img src="./images/icons/2.png" alt="remove"/>
                </div>
                <div className="widget__city">
                    <img src="./images/icons/6.png" alt="location"/>
                    <h2>{this.props.details.name}</h2>
                </div>
                <hr />
                <Today details={this.props.details} symbol={this.props.symbol}/>
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