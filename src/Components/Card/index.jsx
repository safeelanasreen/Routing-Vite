import React, { useState } from 'react';

const YourComponent = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  // Assuming you have an array of cards like this
  const cards = [
    { title: 'Card 1', imgSrc: 'path/to/img1.jpg' },
    { title: 'Card 2', imgSrc: 'path/to/img2.jpg' },
    { title: 'Card 3', imgSrc: 'path/to/img3.jpg' },
    { title: 'Card 4', imgSrc: 'path/to/img4.jpg' },
  ];

  return (
    <div>
      <h1>Your Component</h1>
      <div className="card-container">
        {showAllCards
          ? cards.map((card, index) => (
              <div key={index} className="card">
                <h3>{card.title}</h3>
                <img src={card.imgSrc} alt={card.title} />
              </div>
            ))
          : cards.slice(0, 2).map((card, index) => (
              <div key={index} className="card">
                <h3>{card.title}</h3>
                <img src={card.imgSrc} alt={card.title} />
              </div>
            ))}
      </div>
      <button onClick={toggleShowAllCards}>
        {showAllCards ? 'Show Less' : 'Show All Cards'}
      </button>
    </div>
  );
};

export default YourComponent;
