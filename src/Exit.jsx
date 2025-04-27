// Exit.jsx
import React from 'react';
import './Exit.css';
import exitImage from './assets/exit.svg'; // adjust if your path is slightly different

function Exit({ onBack }) {
  const handleViewStats = () => {
    console.log('View Stats clicked');
  };

  return (
    <div className="exit-container fade-in">
      <button className="back-arrow" onClick={onBack}>← Home</button>

      <img src={exitImage} alt="Exit" className="exit-image" />

      <h1 className="exit-title">You're all set.</h1>
      <p className="exit-subtitle">Check back in after your shift.</p>

      <button className="view-stats-button" onClick={handleViewStats}>
        View your Stats
      </button>
    </div>
  );
}

export default Exit;
