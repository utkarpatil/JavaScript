function MovieCard({ movie, onClick }) {
  return (
    <div className="card h-100 shadow" onClick={() => onClick(movie)} style={{ cursor: 'pointer' }}>
      {movie.Poster && movie.Poster !== 'N/A' && (
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
      )}
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text"><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre || 'N/A'}</p>
        <p><strong>IMDB:</strong> {movie.imdbRating || 'N/A'}</p>
      </div>
    </div>
  );
}
export default MovieCard;
