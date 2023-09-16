import React, { useState } from 'react';

// function to display first 150 characters of synopsis with button to toggle open and close for more/less 

function Synopsis({ initialText }) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(initialText);

  const toggleSynopsis = () => {
    setIsOpen(!isOpen);
  };

  const displayText = isOpen ? text : text.slice(0, 150);

  return (
    <div className= "synopsis-container">
      <p>{displayText}</p>
      {text.length > 150 && (
        <button
        className={`synopsis-button ${isOpen ? 'open' : 'closed'}`}
        onClick={toggleSynopsis}>

          {isOpen ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}

export default Synopsis;
