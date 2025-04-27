"use client";

import React, { useState } from "react";
import "./ShiftLog.css";

function ShiftLog({ onBack, onStartShift }) {
  const [selectedShift, setSelectedShift] = useState(null);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  async function handleShift(shiftType) {
    try {
      setSelectedShift(shiftType);

      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User not logged in!");
        return;
      }

      // 🚨 Try saving shift to backend
      await fetch("http://localhost:3001/api/submitEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId,
          shift: shiftType,
          mood: -1,   // temporary placeholders
          sleep: "", 
        }),
      });

      console.log("Successfully saved shift.");

    } catch (error) {
      console.warn("Backend save failed, but proceeding for demo...");
    }

    // Always proceed even if backend failed
    if (onStartShift) {
      onStartShift();
    }
  }

  return (
    <div className="shift-frame fade-in">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="shift-title">Good morning, User!</h1>
      <p className="shift-date">Today is {today}</p>
      <p className="shift-subtitle">Log your wellness to start or end your shift.</p>

      <div className="shift-buttons">
        <button className="shift-button start-button" onClick={() => handleShift("start")}>
          <div className="emoji">↻</div>
          Start of Shift
        </button>

        <button className="shift-button end-button" onClick={() => handleShift("end")}>
          <div className="emoji">↺</div>
          End of Shift
        </button>
      </div>

      <p className="view-stats">View my statistics →</p>
    </div>
  );
}

export default ShiftLog;
