// MentalClarityA.jsx
import React, { useState, useEffect } from 'react';
import './MentalClarityA.css';

function MentalClarityA({ onBack, onNext }) {
  const [questionData, setQuestionData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(true);

  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: "Generate a very simple multiple choice mental math question. Strictly output pure JSON with no extra formatting like this: {\"question\":\"What is 2+2?\",\"options\":[\"3\",\"4\",\"5\"],\"answer\":\"4\"}."
                }]
              }]
            })
          }
        );

        const data = await response.json();
        let rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

        // Clean unwanted markdown wrappers if they exist
        rawText = rawText.replace(/```json|```/g, '').trim();

        const parsed = JSON.parse(rawText);
        setQuestionData(parsed);
      } catch (error) {
        console.error('Error fetching mental clarity question:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, []);

  if (loading) {
    return (
      <div className="fade-in clarity-frame">
        <p className="loading-text">Loading question...</p>
      </div>
    );
  }

  return (
    <div className="fade-in clarity-frame">
      <button className="back-arrow" onClick={onBack}>←</button>

      <h1 className="clarity-title">Mental Clarity Check</h1>
      <p className="clarity-subtitle">Solve quickly:</p>

      <div className="clarity-question">{questionData?.question}</div>

      <div className="clarity-options">
        {questionData?.options.map((option, index) => (
          <div
            key={index}
            className={`clarity-option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
            {selectedOption === option && <span className="checkmark">✔</span>}
          </div>
        ))}
      </div>

      <button className="next-button" onClick={onNext} disabled={!selectedOption}>
        Next →
      </button>
    </div>
  );
}

export default MentalClarityA;
