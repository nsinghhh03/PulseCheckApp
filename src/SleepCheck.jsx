"use client";

import React, { useState } from "react";
import "./SleepCheck.css";

function SleepCheck({ onBack, onNext }) {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Less than 4 hours",
    "4–6 hours",
    "6–8 hours",
    "More than 8 hours"
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  async function handleSubmit() {
    if (!selectedOption) {
      alert("Please select your sleep quality.");
      return;
    }

    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User not logged in!");
        return;
      }

      await fetch("http://localhost:3001/api/submitEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId,
          shift: "start", // adjust later if needed
          mood: -1,       // placeholder
          sleep: selectedOption,
          timestamp: new Date().toISOString(),
        }),
      });

      console.log("Sleep successfully submitted.");

    } catch (error) {
      console.warn("Backend save failed during sleep submission, proceeding anyway...");
    }

    // Always proceed after attempt
    if (onNext) {
      onNext();
    }
  }

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
            <span className="checkmark">{selectedOption === option && "✔"}</span>
          </button>
        ))}
      </div>

      <button className="sleep-next-button" onClick={handleSubmit}>
        Next →
      </button>
    </div>
  );
}

export default SleepCheck;
