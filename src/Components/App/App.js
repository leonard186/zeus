import React, {Component} from 'react';
import './App.scss';
import SearchBar from '../SearchBar/SearchBar';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import WeatherAPI, {cityJSON} from '../WeatherAPI/WeatherAPI';


class App extends Component {

    state = {
        query: '',
        queryResponse: {}
    };

    renderWeather = (arg) => {
        WeatherAPI.getWeather(arg);
    };

    handleQuery = (query) => {
         return WeatherAPI.getWeather(query).then(result => {
             const queryResponse = {...this.state.queryResponse};
             queryResponse[query] = result;
             this.setState({queryResponse});
         });
    };

    render() {
        const weatherWidget = () => {
                Object.keys(this.state.queryResponse).map(element => {
                    return <WeatherWidget
                        key={element.id}
                        city={element.name}
                        details={this.state.queryResponse[element]}
                    />
                })
        };

        return (
            <div>
                <SearchBar submit={this.handleQuery} />

                <div className="widget-container">
                    {Object.keys(this.state.queryResponse).map(element => {
                        return <WeatherWidget
                            key={this.state.queryResponse[element].id}
                            city={element.name}
                            details={this.state.queryResponse[element]}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default App;
