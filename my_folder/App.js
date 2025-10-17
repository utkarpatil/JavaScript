import React, { useState } from 'react';
import MovieList from './components/MovieList';
import GenreChart from './components/GenreChart';
import MovieModal from './components/MovieModal';

const API_KEY = 'b341502c'; // Replace with your actual OMDb API key

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setMovies([]);

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await res.json();

      if (data.Response === 'True') {
        const moviePromises = data.Search.map((movie) =>
          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}&plot=full`).then((res) => res.json())
        );
        const detailedMovies = await Promise.all(moviePromises);
        setMovies(detailedMovies);
      } else {
        setError(data.Error);
      }
    } catch {
      setError('Something went wrong while fetching movies.');
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Movie Explorer</h2>
      <form onSubmit={handleSearch} className="mb-4 d-flex" id="searchForm">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search movies..."
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </form>

      {error && <p className="text-danger text-center">{error}</p>}
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      {movies.length > 0 && <GenreChart movies={movies} />}
      <MovieModal show={showModal} movie={selectedMovie} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default App;
