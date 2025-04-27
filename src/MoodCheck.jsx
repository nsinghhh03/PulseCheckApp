"use client";

import React, { useState } from "react";
import "./MoodCheck.css";

function MoodCheck({ onBack, onNext }) {
  const [mood, setMood] = useState(3);

  const handleSliderChange = (e) => {
    setMood(parseInt(e.target.value, 10));
  };

  async function handleNext() {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User not logged in!");
        return;
      }

      // 🚀 Attempt backend save
      await fetch("http://localhost:3001/api/submitEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId,
          shift: "start", // You can store/retrieve proper shift info later
          mood: mood,
          sleep: "", // placeholder
        }),
      });

      console.log("Mood successfully submitted.");
      
    } catch (error) {
      console.warn("Backend save failed, proceeding anyway...");
    }

    // Always proceed after attempt
    if (onNext) {
      onNext();
    }
  }

  return (
    <div className="mood-frame fade-in">
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

      <button className="next-button" onClick={handleNext}>Next →</button>
    </div>
  );
}

export default MoodCheck;
