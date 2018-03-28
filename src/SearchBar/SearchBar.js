import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    let url = `https://api.punkapi.com/v2/beers?food=${this.state.searchTerm.replace(/\s/g,'')}`;
    fetch(url)
      .then(data => {
        return data.json();
      })
      .then(data => { 
        this.setState({ beers: data })});
  }

  render() {
    return <div className="search">
        <form>
          <input type="text" size="45" placeholder="Enter a food to pair with your beer.." onChange={this.handleChange.bind(this)} value={this.state.searchTerm} />
          <button type="submit" onClick={this.handleSubmit.bind(this)}>
            Search
          </button>
        </form>
      </div>;
  }
}

export default SearchBar;
