import React, { useState } from "react";
import Listings from "../src/components/Listings"
import Header from "../src/components/Header";

export default function Home() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div>
      <Header setSearchResults={setSearchResults} />
      <Listings searchResults={searchResults} />
    </div>
  );
}
