import React, {Component} from 'react';
import './App.scss';
import SearchBar from '../SearchBar/SearchBar';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import WeatherAPI from '../WeatherAPI/WeatherAPI';


class App extends Component {

    state = {
        query: '',
        symbol: true,
        queryResponse: {}
    };

    handleQuery = (query) => {
        query = query.toLowerCase();
         return WeatherAPI.getWeather(query).then(result => {
             const queryResponse = {...this.state.queryResponse};
             queryResponse[query] = result;
             this.setState({queryResponse});
         });
    };

    handleClickC = () => {
        this.setState({symbol: true});
    };

    handleClickF = () => {
        this.setState({symbol: false});
    };

    removeWidget = (key) => {
      const queryResponse = {...this.state.queryResponse};
      delete queryResponse[key];
      this.setState({queryResponse});
    };

    render() {
        const rotate = this.state.symbol ? "symbol__inner rotate" : "symbol__inner";

        return (
            <div>
                <SearchBar submit={this.handleQuery} />
                {Object.keys(this.state.queryResponse).length !== 0 &&
                (<div className="symbol">
                        <div className={rotate}>
                            <div className="symbol__celsius">
                                <img src="/images/icons/40.png" alt="celsius" onClick={this.handleClickC}/>
                            </div>
                            <div className="symbol__fahrenheit">
                                <img src="/images/icons/35.png" alt="fahrenheit" onClick={this.handleClickF}/>
                            </div>
                        </div>
                    </div>)
                }
                <div className="widget-container">
                    {Object.keys(this.state.queryResponse).slice(0).reverse().map(element => {
                        return <WeatherWidget
                            key={this.state.queryResponse[element].id}
                            id={this.state.queryResponse[element]}
                            city={element.name}
                            details={this.state.queryResponse[element]}
                            symbol={this.state.symbol}
                            removeWidget={this.removeWidget}
                        />
                    })}
                </div>
            </div>
        );
    }
}

export default App;
