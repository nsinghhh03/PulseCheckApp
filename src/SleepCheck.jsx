// SleepCheck.jsx
import React, { useState } from 'react';
import './SleepCheck.css';

function SleepCheck({ onBack, onNext }) {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    "Less than 4 hours",
    "4–6 hours",
    "6–8 hours",
    "More than 8 hours"
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="sleep-frame fade-in">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="sleep-title">Sleep Check</h1>
      <p className="sleep-subtitle">How would you describe the quality of your sleep last night?</p>

      <div className="sleep-options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`sleep-option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleSelect(option)}
          >
            {option}
            <span className="checkmark">✔</span>
          </button>
        ))}
      </div>

      <button className="sleep-next-button" onClick={onNext}>
        Next →
      </button>
    </div>
  );
}

export default SleepCheck;
