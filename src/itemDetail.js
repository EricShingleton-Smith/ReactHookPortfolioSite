import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function Item() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
      const fetchItem = await fetch('https://fortnite-api.theapinetwork.com/items/list');
      const item = await fetchItem.json();

      console.log(item);

  };


  return (
      <div>
          <h1>item</h1>
      </div>
  )
}

export default Item;
