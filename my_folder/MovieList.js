import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="row gy-4" id="moviesContainer">
      {movies.map((movie) => (
        <div className="col-md-4" key={movie.imdbID}>
          <MovieCard movie={movie} onClick={onMovieClick} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
