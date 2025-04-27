// ShiftLog.jsx
import React from 'react';
import './ShiftLog.css';

function ShiftLog({ onBack }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="shift-frame">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="shift-title">Good morning, User!</h1>
      <p className="shift-date">Today is {today}</p>
      <p className="shift-subtitle">Log your wellness to start or end your shift.</p>

      <button className="shift-button start-button">
        ⟳ Start of Shift
      </button>

      <button className="shift-button end-button">
        ⟲ End of Shift
      </button>

      <p className="view-stats">View my statistics →</p>

      <button className="next-button">Next →</button>
    </div>
  );
}

export default ShiftLog;
