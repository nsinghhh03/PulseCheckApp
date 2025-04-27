// AdminLogin.jsx
import React from 'react';
import './AdminLogin.css';

function AdminLogin({ onBack }) {
  return (
    <div className="admin-login-container fade-in">
      <button className="back-arrow" onClick={onBack}>← Home</button>

      <h1 className="admin-login-title">Admin Login</h1>

      <form className="admin-login-form">
        <input type="text" placeholder="Username" className="admin-input" />
        <input type="password" placeholder="Password" className="admin-input" />
        <button type="submit" className="admin-login-button">Log In</button>
      </form>
    </div>
  );
}

export default AdminLogin;
