// Using what you've learned this week, create a page of an application that enables users to vote and leave reviews on movies.
// All data necessary for this assignment, including Movies and Reviews, can be pulled from an API or you can create the Movies and their Reviews yourself.
// Your application must include the following components:
// MovieList: a container for all the Movie components and their data.  
// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
// Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
// ReviewList: a container inside of a Movie that houses Review components.
// Review: A text review a user can leave on a movie.
// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.


import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import './App.css';
import Logo from './Logo';

function App() {
  const [movies, setMovies] = useState([]);

  // get data from api and return movieList

  useEffect(() => {
    fetch('https://64ee46831f872182714277cf.mockapi.io/Movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="movie-list">
      <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;




