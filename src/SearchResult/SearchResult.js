import React, { Component } from "react";
import BeerCard from "../BeerCard/BeerCard";

class SearchResult extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?")
      .then(data => {
        return data.json();
      })
      .then(data => this.setState({ beers: data }));
  }

  render() {
    return this.state.beers.map((beer, i) => {
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
    });
  }
}

export default SearchResult;