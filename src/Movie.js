import React, { useState, useEffect } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import './App.css';
import $ from 'jquery';
import Synopsis from './Synopsis'

function Movie({ movie }) {
  const [reviews, setReviews] = useState(Array.isArray(movie.review) ? movie.review : []);
  const [averageScore, setAverageScore] = useState (0);

  useEffect (() => {
    fetchStarScoreFromApi(movie.id);
  }, [movie.id]);

  const handleScoreChange = (newScore) => {
    setAverageScore(newScore);
  console.log("new score chng in movie", newScore);
  }

  const handleAddReview = (newReview)=> {
    postReviewToApi(movie.id, newReview)
      .then(() => {
        setReviews((prevReviews) => [...prevReviews, newReview]);
    })
      .catch ((error) => {
        console.error ('Error handling add review:', error);
      });
};


// add new review to movie card and api
//   const postReviewToApi = async (id, newReview) => {
//     try {
//       const response = await fetch (`https://64ee46831f872182714277cf.mockapi.io/Movies/${id}` , {
//         method: 'PUT',
//         // data: {
//         //   review: newReview,
//         // }
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ 
//           reviews: [...reviews, newReview],
//         }),
//       });

//       if(!response.ok) {
//         throw new Error('Failed to post review to API');
//       }
//       // const responseData = await response.json();
//       // setReviews([...reviews, newReview]);

//     } catch(error) {
//       console.error('Error posting review:', error);
//   }
// };
const fetchStarScoreFromApi = (id) => {
  $.ajax({
    url:`https://64ee46831f872182714277cf.mockapi.io/Movies/${id}`,
    type: 'GET', 
    success: function (data) {
      if (data.stars !== undefined) {
        setAverageScore(data.stars);
      }
    },
    error: function (xhr, status, error) {
      console.error('Error fetching star score:', error);
    },
  });
};

const postReviewToApi = (id, newReview) => {
  return new Promise ((resolve, reject) => {
  $.ajax({
    url: `https://64ee46831f872182714277cf.mockapi.io/Movies/${id}`,
    type: 'PUT', 
    contentType: 'application/json',
    data: JSON.stringify({review: [...reviews, newReview]}),
    success: function () {
      console.log('Review updated successfully');
      resolve();
    },
    error: function (xhr, status, error) {
      console.error('Error updating review:', error);
      reject(error);
    },
  });
});
};

// movie card components: 

  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.year} {movie.rating}</p>
      <Synopsis initialText={movie.synopsis} />
      <Stars movieID={movie.id} averageScore={averageScore} onScoreChange={handleScoreChange} />
      <p>Stars: {averageScore.toFixed(2)}</p>
      <ReviewList reviews={reviews} />
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
}

export default Movie;
