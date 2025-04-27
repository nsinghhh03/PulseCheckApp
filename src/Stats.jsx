// Stats.jsx
import React, { useState } from 'react';
import './Stats.css';

function Stats({ onBack, onViewAISummary }) {
  const [filter, setFilter] = useState('Last Week');

  const handleFilterToggle = () => {
    setFilter((prev) => (prev === 'Last Week' ? 'This Week' : 'Last Week'));
  };

  return (
    <div className="stats-frame fade-in">
      
      {/* Back Arrow */}
      <button className="back-arrow" onClick={onBack} type="button">←</button>

      {/* Title and Filter */}
      <div className="title-row">
        <h1 className="stats-title">Your statistics</h1>
        <button className="filter-button" onClick={handleFilterToggle} type="button">
          {filter} ⌄
        </button>
      </div>

      {/* AI Summary Link */}
      <button className="ai-summary-link" onClick={onViewAISummary} type="button">
        ✨ View AI Summary
      </button>

      {/* KPI Grid */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <h2 className="stat-value">4.7/5</h2>
          <p className="stat-label">Average Mood Score</p>
        </div>
        <div className="stat-card purple">
          <h2 className="stat-value">Medium</h2>
          <p className="stat-label">Average Stress Level</p>
        </div>
        <div className="stat-card green">
          <h2 className="stat-value">71%</h2>
          <p className="stat-label">Healthy Sleep Rate</p>
        </div>
        <div className="stat-card red">
          <h2 className="stat-value">100%</h2>
          <p className="stat-label">Mental Clarity Score</p>
        </div>
      </div>

      {/* End of Shift Summary */}
      <div className="end-summary">
        <h2 className="summary-title">End of Shift Summary</h2>

        <div className="summary-item">
          <div className="icon low-sleep">🛌</div>
          <div className="summary-info">
            <div className="summary-label">Low Sleep (&lt;6 hrs)</div>
            <div className="summary-bar">
              <div className="summary-fill" style={{ width: '50%' }}></div>
            </div>
          </div>
          <div className="summary-percentage">50%</div>
        </div>

        <div className="summary-item">
          <div className="icon missed-meals">❌</div>
          <div className="summary-info">
            <div className="summary-label">Missed Meals</div>
            <div className="summary-bar">
              <div className="summary-fill" style={{ width: '23%' }}></div>
            </div>
          </div>
          <div className="summary-percentage">23%</div>
        </div>

        <div className="summary-item">
          <div className="icon high-stress">😰</div>
          <div className="summary-info">
            <div className="summary-label">High Stress</div>
            <div className="summary-bar">
              <div className="summary-fill" style={{ width: '16%' }}></div>
            </div>
          </div>
          <div className="summary-percentage">16%</div>
        </div>
      </div>

    </div>
  );
}

export default Stats;