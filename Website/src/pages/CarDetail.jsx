import React from 'react';
import { useLocation } from 'react-router-dom';

const CarDetail = () => {
  const location = useLocation();  // Use the location hook to get the passed data

  // Ensure we're correctly getting the car data passed via state
  const { name, image, id } = location.state || {};

  if (!name || !image || !id) {
    return <div>Car details not found!</div>; // Return a message if no car data is passed
  }

  return (
    <div>
      <h2>{id}</h2>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>

    
  );
};


export default CarDetail;
