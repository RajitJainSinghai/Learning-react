import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]); // State for all movies
  const [searchTerm, setSearchTerm] = useState(''); // State for the search input
  const [filteredMovies, setFilteredMovies] = useState([]); // State for filtered movies

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjIzMDRiYzIyNjgyNmRiOGRlNWNhZmRiMjA3NjFjMCIsIm5iZiI6MTczNzcxNzk3MS4yMTcsInN1YiI6IjY3OTM3OGQzMzg1ZDBjZWJlNTIzOTkyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e5LRrZBGm8F6WMPAqdqSInuHEd2zkLixbzZ9RI7_kZY',
      },
    };

    // Fetch movies from TMDb API
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)

  
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results); // Store all movies
        
        setFilteredMovies(data.results); // Initially display all movies
        console.log(data.results);

      })
      .catch((err) => console.error(err));
  }, []);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value.toLowerCase(); // Convert input to lowercase
    setSearchTerm(searchValue); // Update the search term
  
    // Filter movies based on the search term
    const filtered = movies.filter((movie) =>
      (movie.title?.toLowerCase().includes(searchValue) || movie.name?.toLowerCase().includes(searchValue))
    );
  
    setFilteredMovies(filtered); // Update the filtered movie list
  };
  

  return (
    <>
      {/* <h1 className="text-xxl text-red-500 underline">Movie Search App</h1> */}

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-bar"
      />

      {/* Movie grid */}
      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
<h3 className="movie-title">{movie?.title || movie?.name}</h3>
</div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </>
  );
}

export default App;
