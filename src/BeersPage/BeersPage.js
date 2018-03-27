import React, { Component } from "react";
import BeerCard from "../BeerCard/BeerCard";

class BeersPage extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=10")
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

export default BeersPage;
