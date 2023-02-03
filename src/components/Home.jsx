import React from 'react'
import "./Home.css"
import Car from "./car"
const Home= () => {
  return (
    <div className='home'>
      <div className='home_section'>
        <Car 
        img="../images/card.jpg"
        place="Dubai, UAE"
        description="Beach and Ocean Views"
        price="$5000"
        />
        <Car 
        img="../images/card.jpg"
        place="Dubai, UAE"
        description="Beach and Ocean Views"
        price="$5000"
        />
        <Car
         img="../images/card.jpg"
         place="Dubai, UAE"
         description="Beach and Ocean Views"
         price="$5000"
        />
      </div>
    </div>
  )
}

export default Home;
