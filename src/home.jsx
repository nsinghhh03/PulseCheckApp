// Home.jsx
import React from 'react';
import './Home.css';

function Home({ onStart }) {
  return (
    <div className="phone-frame">
      
      <div className="top-half">
        <img src="/src/assets/logo.svg" alt="PulseCheck Logo" className="logo" />
      </div>

      <div className="bottom-half">
        <h1 className="pulsecheck-title">PulseCheck</h1>

        <p className="pulsecheck-subtitle">
          Track mental clarity, stress, and energy through every shift.
        </p>

        <button className="start-button" onClick={onStart}>
          Start →
        </button>

        <p className="admin-link">
          Are you an admin member?
        </p>
      </div>

    </div>
  );
}

export default Home;
