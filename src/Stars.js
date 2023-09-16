import React , {useState} from 'react';
import $ from 'jquery';

// calculate avg star click and post to api and fill stars accordingly 
function Stars({ movieID, averageScore, onScoreChange }) {
  const [clicks, setClicks] = useState (0);
  const [totalScore, setTotalScore] = useState(0); 
  // const [averageScore, setAverageScore] = useState (0);
  
  const handleStarClick = (selectedScore) => {
    // onScoreChange(selectedScore);
    // setSelectedStars([...selectedStars, selectedScore]); 
    const newTotalScore = totalScore + selectedScore;
    const newClicks = clicks + 1;

    setTotalScore (newTotalScore);
    setClicks (newClicks);

    const newScore = newTotalScore / newClicks;
    // props.setAverageScore(newScore);

    console.log("new avg score in stars.js", newScore);

    onScoreChange(newScore);

    postStarScoreToApi(movieID, newScore);
    
  };
  
  // const newAverageScore =
  //   selectedStars.reduce((total, score) => total + score, 0) / selectedStars.length;
    
  //   onScoreChange(newAverageScore); 
  // };

// add star score to api

const postStarScoreToApi = (id, newScore) => {
  return new Promise ((resolve, reject) => {
  $.ajax({
    url: `https://64ee46831f872182714277cf.mockapi.io/Movies/${id}`,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify({ stars: newScore }), 
    success: function () {
      console.log('Star score updated successfully');
      resolve();
    },
    error: function (xhr, status, error) {
      console.error('Error updating star score:', error);
      reject(error);
    },
  });
  });
};

  return (
    <div className="stars-container">
      <div className="stars">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`star ${index <= averageScore ? 'filled-star' : ''}`}
          onClick={() => handleStarClick(index)}
        >
          ★
        </span>
      ))}
      </div>
    </div>
  );
}

export default Stars;

