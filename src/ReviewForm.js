// reviewForm to handle adding reviews to movie card

import React, { useState } from 'react';

function ReviewForm({ onAddReview }) {
  const [newReview, setNewReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() !== '') {
      const reviewObject = { text: newReview };
    onAddReview(reviewObject);
    setNewReview('');
    }
  };

  // const handleAddReview = (newReview) => {
  //   postReviewToApi(newReview);

  //     setReviews ([...reviews, newReview]);


// add new review and convert review data to an array 
  // const handleAddReview = (newReview) => {
  //   let updatedReviews = reviews; 
    
    // if (!Array.isArray(reviews)) {
    //   updatedReviews = [reviews];
    // }
    
    // updatedReviews = [...updatedReviews, newReview];


  return (
    <form onSubmit={handleSubmit} className="review-form">
      <textarea
        value={newReview}
        onChange={(e) => setNewReview(e.target.value)}
        placeholder="Write your review..."
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
