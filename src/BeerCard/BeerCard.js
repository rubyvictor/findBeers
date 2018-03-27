import React from "react";

const BeerCard = props => {
  return (
    <div className="beerCard">
      <img className="beerCardPictures" src={props.imageUrl} alt="An awesome beer" />
      <h1 className="beerCardTitles">{props.name}</h1>
      <h2 className="beerCardDescriptions">{props.description}</h2>
      <h3 className="beerCardFoodPairs">{props.food_pairing}</h3>
    </div>
  );
};

export default BeerCard;
