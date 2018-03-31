import React, { Component } from "react";
import BeerCard from "../BeerCard/BeerCard";
import SearchBar from "../SearchBar/SearchBar";

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      filterBeers: []
    };
  }

  async componentDidMount() {
    await fetch("https://api.punkapi.com/v2/beers?")
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ beers: data, filterBeers: data });
      });
  }

  async searchBeers(searchTerm) {
    const foundBeers = await this.state.beers.filter(beer =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({
      filterBeers: foundBeers
    });
  }

  render() {
    return (
      <div>
        <SearchBar searchBeers={this.searchBeers.bind(this)} />
        {this.state.filterBeers.map((beer, i) => {
          return (
            <div key={i}>
              <BeerCard
                imageUrl={beer.image_url}
                name={beer.name}
                description={beer.description}
                food_pairing={beer.food_pairing}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default SearchResult;
