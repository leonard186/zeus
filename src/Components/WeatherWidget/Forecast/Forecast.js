import React from 'react';

class Forecast extends React.Component {
    render() {
        return (
            <div className="widget__forecast__day">
                <div className="widget__forecast__day-dow">
                    {this.props.day}
                </div>
                <div className="widget__forecast__day-icon">
                    <img src="/images/icons/32.png" alt="cloudy"/>
                </div>
                <div className="widget__forecast__day-temp">
                    <div>
                        High 22<sup>&#8451;</sup>
                    </div>
                    <div>
                        Low 12<sup>&#8451;</sup>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forecast;