// UserLogin.jsx
import React from 'react';
import './UserLogin.css';

function UserLogin({ onNext, onBack }) {
  return (
    <div className="login-frame">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">Enter your login ID and password.</p>

      <div className="login-field">
        <label className="login-label">Login ID</label>
        <input type="text" className="login-input" placeholder="Enter your login ID or email" />
      </div>
 
      <div className="login-field">
        <label className="login-label">Password</label>
        <input type="password" className="login-input" placeholder="Enter your password" />
      </div>

      <button className="login-button" onClick={onNext}>Next →</button>
    </div>
  );
}

export default UserLogin;
