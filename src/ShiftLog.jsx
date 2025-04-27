// ShiftLog.jsx
import React from 'react';
import './ShiftLog.css';

function ShiftLog({ onBack, onStartShift }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="shift-frame fade-in">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="shift-title">Good morning, User!</h1>
      <p className="shift-date">Today is {today}</p>
      <p className="shift-subtitle">Log your wellness to start or end your shift.</p>

      <div className="shift-buttons">
        <button className="shift-button start-button" onClick={onStartShift}>
          <div className="emoji">↻</div> {/* clockwise for Start of Shift */}
          Start of Shift
        </button>

        <button className="shift-button end-button">
          <div className="emoji">↺</div> {/* counterclockwise for End of Shift */}
          End of Shift
        </button>
      </div>

      <p className="view-stats">View my statistics →</p>
    </div>
  );
}

export default ShiftLog;
