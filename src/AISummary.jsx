// AISummary.jsx
import React, { useState, useEffect } from 'react';
import './AISummary.css';

function AISummary({ onBack }) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);

  const statsData = {
    mood: '4.7/5',
    stress: 'Medium',
    sleepRate: '71%',
    clarity: '100%',
  };

  useEffect(() => {
    async function generateSummary() {
      try {
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

        if (!apiKey) {
          throw new Error('OpenAI API key not found.');
        }

        const prompt = `
You are analyzing a user's wellness data over the past 7 days.
Given:
- Mood Score: ${statsData.mood}
- Stress Level: ${statsData.stress}
- Healthy Sleep Rate: ${statsData.sleepRate}
- Mental Clarity Score: ${statsData.clarity}

Generate a short paragraph (~2-3 sentences) summarizing their wellness trends.
Keep the tone supportive and professional.
`;

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a health and wellness advisor summarizing user data." },
              { role: "user", content: prompt }
            ],
            temperature: 0.7,
          }),
        });

        const data = await response.json();

        const aiText = data?.choices?.[0]?.message?.content?.trim() || 'Unable to generate summary.';
        setSummary(aiText);
      } catch (error) {
        console.error('Error generating summary:', error);
        setSummary('Failed to generate summary. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    generateSummary();
  }, []);

  return (
    <div className="ai-summary-frame fade-in">
      <button className="back-arrow" onClick={onBack}>←</button>

      <div className="analyzing-header">
        <span role="img" aria-label="sparkle" className="sparkle">✨</span>
        <h2 className="analyzing-text">{loading ? 'Analyzing.....' : 'Your AI Summary'}</h2>
      </div>

      {loading ? (
        <div className="loading-box">Analyzing your stats, please wait...</div>
      ) : (
        <div className="summary-box">{summary}</div>
      )}
    </div>
  );
}

export default AISummary;