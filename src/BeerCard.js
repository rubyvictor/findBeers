import React from "react";

const BeerCard = props => {
  return (
    <div className="beer-Card">
      <img src={props.imageUrl} alt="An awesome beer" />
    </div>
  );
};

export default BeerCard;
