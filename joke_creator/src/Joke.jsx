import React, { useState, useEffect } from 'react';

function Joke() {
  const [joke, setJoke] = useState(""); // State to hold the joke

  // Fetch a joke when the component mounts
useEffect(() => {
  fetchapi();
}, [])

  const fetchapi = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the fetched data
        setJoke(data.joke); // Set the joke from the API response
      })
      .catch((error) => console.error("Error fetching the joke:", error)); // Handle errors
  };

  return (
    <div>
      <button onClick={fetchapi}>Generate New Joke</button>
      <p>{joke}</p> {/* Display the joke */}
    </div>
  );
}

export default Joke;
