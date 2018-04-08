import React, { Component } from "react";
import BeerCard from "../BeerCard/BeerCard";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchResult.css";

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      filterBeers: []
    };
  }

  async componentDidMount() {
    await fetch("https://api.punkapi.com/v2/beers?page=3&per_page=80")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ beers: data, filterBeers: data });
      });
  }

  searchBeers(searchTerm) {
    const foundBeers = this.state.beers.filter(beer =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({
      filterBeers: foundBeers
    });
  }

  render() {
    return (
      <div className="result-container">
        <h1 id="page-title">Punk's Beer-Finder</h1>
        <SearchBar searchBeers={this.searchBeers.bind(this)} />
        {this.state.filterBeers.map((beer, i) => {
          return (
            <div key={i}>
              <BeerCard
                imageUrl={beer.image_url}
                name={beer.name}
                description={beer.description}
                foodPairing={beer.food_pairing}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchResult;
