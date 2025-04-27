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

  const handleSubmit = async () => {
    if (!selected) {
      alert("Please select an option about your food intake.");
      return;
    }

    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User not logged in!");
        return;
      }

      // Save attempt (ignore if fails)
      await fetch("http://localhost:3001/api/submitEntry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          foodIntake: selected,
          timestamp: new Date().toISOString(),
        }),
      });

      console.log("Successfully submitted food intake.");
    } catch (error) {
      console.warn("Backend save failed during food intake, proceeding anyway...");
    }

    if (onNext) {
      onNext(selected); // ✅ MUST pass the selected option!
    }
  };

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

      <button className="next-button" onClick={handleSubmit} disabled={!selected}>
        Next →
      </button>
    </div>
  );
}

export default FoodIntake;