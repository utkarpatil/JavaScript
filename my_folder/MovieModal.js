import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function MovieModal({ show, movie, onHide }) {
  if (!movie) return null;

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{movie.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column flex-md-row">
          {movie.Poster && movie.Poster !== 'N/A' && (
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="img-fluid mb-3 mb-md-0 me-md-4"
              style={{ maxWidth: '250px' }}
            />
          )}
          <div>
            <p><strong>Plot:</strong> {movie.Plot || 'No plot available.'}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>IMDB:</strong> {movie.imdbRating}</p>
            {movie.Website && movie.Website !== "N/A" && (
              <p>
                <strong>Watch:</strong>{' '}
                <a href={movie.Website} target="_blank" rel="noopener noreferrer">
                  {movie.Website}
                </a>
              </p>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieModal;
