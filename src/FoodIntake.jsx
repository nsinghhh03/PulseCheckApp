// FoodIntake.jsx
import React, { useState } from 'react';
import './FoodIntake.css';

function FoodIntake({ onBack, onNext }) {
  const [selected, setSelected] = useState('');

  const options = [
    'Within the last 3 hours',
    'Over 6 hours ago',
    'No meal in the last 12 hours',
  ];

  return (
    <div className="fade-in food-frame">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="food-title">Food Intake</h1>
      <p className="food-subtitle">When did you last have a full meal?</p>

      <div className="food-options">
        {options.map((option) => (
          <div
            key={option}
            className={`food-option ${selected === option ? 'selected' : ''}`}
            onClick={() => setSelected(option)}
          >
            {option}
            {selected === option && <span className="checkmark">✔</span>}
          </div>
        ))}
      </div>

      <button className="next-button" onClick={onNext} disabled={!selected}>
        Next →
      </button>
    </div>
  );
}

export default FoodIntake;
