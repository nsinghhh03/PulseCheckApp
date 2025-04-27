// StressCheck.jsx
import React, { useState } from 'react';
import './StressCheck.css';

function StressCheck({ onBack, onNext }) {
  const [stressLevel, setStressLevel] = useState(2); // default to Medium

  const handleSliderChange = (event) => {
    setStressLevel(Number(event.target.value));
  };

  return (
    <div className="stress-frame fade-in">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="stress-title">Stress Check</h1>
      <p className="stress-subtitle">How much stress are you currently experiencing?</p>

      <div className="stress-icon">🧠</div> {/* Brain/cognition emoji */}

      <input 
        type="range" 
        min="1" 
        max="3" 
        value={stressLevel} 
        step="1"
        className="stress-slider" 
        onChange={handleSliderChange} 
      />

      <div className="stress-labels">
        <span>Low</span>
        <span>Medium</span>
        <span>High</span>
      </div>

      <button className="next-button" onClick={onNext}>Next →</button>
    </div>
  );
}

export default StressCheck;
