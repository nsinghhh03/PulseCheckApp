// MoodCheck.jsx
import React, { useState } from 'react';
import './MoodCheck.css';

function MoodCheck({ onBack, onNext }) {
  const [mood, setMood] = useState(3);

  const handleSliderChange = (e) => {
    setMood(parseInt(e.target.value, 10));
  };

  return (
    <div className="mood-frame">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="mood-title">Mood Check</h1>
      <p className="mood-subtitle">How would you rate your mood at the start of your shift?</p>

      <div className="slider-container">
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={mood}
          onChange={handleSliderChange}
          className="mood-slider"
        />
        <div className="emoji-row">
          <span className="emoji">😞</span>
          <span className="emoji">😕</span>
          <span className="emoji">😐</span>
          <span className="emoji">🙂</span>
          <span className="emoji">😊</span>
        </div>
      </div>

      <button className="next-button" onClick={onNext}>Next →</button>
    </div>
  );
}

export default MoodCheck;
