import React from "react";
import PropTypes from "prop-types";
import "./BeerCard.css";

const BeerCard = props => {
  return (
    <div className="beer-container">
      <div className="beer-icon-container" id="icon">
        <img
          className="beer-icon"
          src={props.imageUrl}
          alt="An awesome beer icon"
        />
      </div>
      <div>
        <h1 className="beer-title">{props.name}</h1>
        <h2 className="beer-description">{props.description}</h2>
        <h3 className="beer-food-pair">{props.food_pairing}</h3>
      </div>
    </div>
  );
};

BeerCard.defaultProps = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  food_pairing: PropTypes.string
};

export default BeerCard;
