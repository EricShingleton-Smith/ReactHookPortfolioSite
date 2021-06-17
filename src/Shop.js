import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const response = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');

    const deserialisedResponse = await response.json();
    console.log("result: ", deserialisedResponse)

    setItems(deserialisedResponse.data);
  };


  return (
      <div>
        {items.map((item, idx) => (
            <h1 key={idx}>
            <Link to={`/shop/${item.idx}`}>{item.item.name}</Link>
            </h1>
        ))}
      </div>
  )
}

export default Shop;
