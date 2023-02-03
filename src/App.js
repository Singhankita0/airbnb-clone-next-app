import React from "react";
import Header from "./components/Header";
// import Filter from "./components/Filter";
// import Card from "./components/Card";
import "./App.css"
// import Car from "./components/car";
import Listings from "./components/Listings"

const App = () => {
  return (
    <div>
      <Header />
      {/* <Filter /> */}
      {/* <Car /> */}
      <Listings />
    </div>
  );
};

export default App;
