import React from "react";
// import StarRoundedIcon from "@material-ui/icons/StarRounded";
import getSymbolFromCurrency from "currency-symbol-map"

const Card = ({address, city, price, rating, img}) => {
  return (
    <div className="card_container">
      <div className="card_img">
        <img src={img} alt="" />
      </div>
      <div className="card_info">
        <h3 className="card_title">{address}, {city}</h3>
        <div className="card_rating">
          {/* <StarRoundedIcon /> */}
          <p>{rating}</p>
        </div>
      </div>
      <p>{getSymbolFromCurrency(price.currency)}{price.total}{" "}night</p>
      {/* <p>1-6 February</p> */}
    </div>
  );
};

export default Card;
