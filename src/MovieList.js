import React from 'react';
import Movie from './Movie';


function MovieList({ movies, setMovies }) {
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} setMovies={setMovies} />
      ))}
    </div>
  );
}

export default MovieList;
