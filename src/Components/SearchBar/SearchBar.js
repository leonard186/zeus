import React from 'react';

class SearchBar extends React.Component {
    state = {
      input: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.submit(this.state.input);
        this.setState({input: ''})
    };

    handleChange = (e) => {
        this.setState({input: e.target.value});
    };

    render() {
        return (
            <header className="search-bar ">
                    <form className="search-bar container" onSubmit={this.handleSubmit} >
                        <label className="search-bar-input">
                            <input type="text" placeholder="Enter location" onChange={this.handleChange} value={this.state.input}/>
                        </label>
                        <button type="submit">&nbsp;</button>
                    </form>
            </header>

        )
    }
}

export default SearchBar