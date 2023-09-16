import React from 'react';
import Review from './Review';


function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return <p>Be the first to review!</p>
  }

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} text={review.text} /> 
      ))}
        {/* <Review text={reviews.text} /> */}
    </div>
  );
}

export default ReviewList;
