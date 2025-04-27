import React, { useState, useEffect } from 'react';
import './MentalClarityA.css';

function MentalClarityA({ onBack, onNext }) {
  const [questionData, setQuestionData] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [loading, setLoading] = useState(true);

  // Generate a simple 3-step PEMDAS math question
  const generateThreeStepMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 9) + 1; // 1–9
    const num2 = Math.floor(Math.random() * 9) + 1;
    const num3 = Math.floor(Math.random() * 9) + 1;

    const operators = ['+', '-', '*'];
    const op1 = operators[Math.floor(Math.random() * operators.length)];
    const op2 = operators[Math.floor(Math.random() * operators.length)];

    let expression;
    let answer;

    if (Math.random() < 0.5) {
      // Parentheses around first two numbers: (num1 op1 num2) op2 num3
      expression = `(${num1} ${op1} ${num2}) ${op2} ${num3}`;
      answer = eval(`(${num1} ${op1} ${num2}) ${op2} ${num3}`);
    } else {
      // Parentheses around last two numbers: num1 op1 (num2 op2 num3)
      expression = `${num1} ${op1} (${num2} ${op2} ${num3})`;
      answer = eval(`${num1} ${op1} (${num2} ${op2} ${num3})`);
    }

    // Generate wrong answers
    const wrongAnswers = new Set();
    while (wrongAnswers.size < 2) {
      const wrong = answer + (Math.floor(Math.random() * 7) - 3); // -3 to +3
      if (wrong !== answer && wrong >= 0) wrongAnswers.add(wrong);
    }

    const options = [answer, ...wrongAnswers];
    options.sort(() => Math.random() - 0.5); // Shuffle

    return {
      question: `What is ${expression}?`,
      options: options.map(String),
      answer: String(answer)
    };
  };

  useEffect(() => {
    const fetchQuestion = () => {
      const newQuestion = generateThreeStepMathQuestion();
      setQuestionData(newQuestion);
      setLoading(false);
    };

    fetchQuestion();
  }, []);

  const handleNext = () => {
    if (questionData && selectedOption) {
      const isCorrect = selectedOption === questionData.answer;
      const logEntry = {
        question: questionData.question,
        options: questionData.options,
        correctAnswer: questionData.answer,
        userAnswer: selectedOption,
        isCorrect: isCorrect,
        timestamp: new Date().toISOString()
      };

      console.log('User answer log:', logEntry); // Save to db later if needed
    }
    onNext();
  };

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

      <button className="next-button" onClick={handleNext} disabled={!selectedOption}>
        Next →
      </button>
    </div>
  );
}

export default MentalClarityA;
