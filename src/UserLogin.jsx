// UserLogin.jsx (updated for demo override)

"use client";

import { useState } from "react";
import "./UserLogin.css";

export default function UserLogin({ onLogin, onBack }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (userId.trim() !== "") {
      try {
        await fetch("http://localhost:3001/api/submitEntry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId, password }),
        });
        console.log("Successfully saved login.");
      } catch (error) {
        console.warn("Backend save failed, but proceeding for demo...");
      }
      onLogin(userId); // Always proceed even if backend fails
    } else {
      alert("Please enter a valid login ID or email.");
    }
  }

  return (
    <div className="login-frame">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="login-title">Login</h1>
      <p className="login-subtitle">Please enter your email and password to begin.</p>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-field">
          <label htmlFor="email" className="login-label">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="login-input"
          />
        </div>

        <div className="login-field">
          <label htmlFor="password" className="login-label">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>

        <button type="submit" className="login-button">
          Next →
        </button>
      </form>
    </div>
  );
}
