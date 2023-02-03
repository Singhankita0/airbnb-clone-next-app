import React from 'react'
import img from "../images/card.jpg";


const Car = ({img,place,description,price}) => {
  return (
    <div className='card'>
      <img src={img} alt="" />
      <div className='card_info'>
       <h3>{place}</h3>
       <h4>{description}</h4>
       <h3>{price}</h3>
        <div className="card_rating">
          <StarRoundedIcon />
          <p>{Rating}</p>
        </div>
      </div>
    </div>
  )
}

export default Car
