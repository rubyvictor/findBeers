import React from "react";

const BeerCard = props => {
  return (
    <div className="beer-Card">
      <img id="beerCardGraphic" src={props.imageUrl} alt="An awesome beer" />
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h3>{props.food_pairing}</h3>
    </div>
  );
};

export default BeerCard;
