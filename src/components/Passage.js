// src/components/Passage.js
import React from 'react';

const Passage = ({ passageNumber, questionsCount,papa }) => {
  // Implement the rendering of passage and questions here
  return (
    <div>
      <h2>Passage {passageNumber}</h2>
      <p>{papa}</p>
      {/* Render questions here */}
    </div>
  );
};

export default Passage;