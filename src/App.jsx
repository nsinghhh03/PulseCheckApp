// App.jsx
import React, { useState } from 'react';
import Home from './home';
import UserLogin from './UserLogin';
import ShiftLog from './ShiftLog';
import MoodCheck from './MoodCheck';
import SleepCheck from './SleepCheck';
import StressCheck from './StressCheck';
import FoodIntake from './FoodIntake';
import MentalClarityA from './MentalClarityA'; // Import MentalClarityA

function App() {
  const [page, setPage] = useState('home');

  // Navigation Handlers
  const handleStart = () => setPage('login');
  const handleBackToHome = () => setPage('home');

  const handleLoginNext = () => setPage('shiftlog');
  const handleBackToLogin = () => setPage('login');

  const handleStartShift = () => setPage('moodcheck');
  const handleBackToShiftLog = () => setPage('shiftlog');

  const handleNextFromMoodCheck = () => setPage('sleepcheck');
  const handleBackToMoodCheck = () => setPage('moodcheck');

  const handleNextFromSleepCheck = () => setPage('stresscheck');
  const handleBackToSleepCheck = () => setPage('sleepcheck');

  const handleNextFromStressCheck = () => setPage('foodintake');
  const handleBackToStressCheck = () => setPage('stresscheck');

  const handleNextFromFoodIntake = () => setPage('mentalclaritya');
  const handleBackToFoodIntake = () => setPage('foodintake');

  const handleNextFromMentalClarityA = () => {
    console.log('Mental Clarity A completed — proceed to next page.');
    // Example: setPage('mentalclarityb') or finish quiz
  };

  return (
    <div className="app-container">
      {page === 'home' && <Home onStart={handleStart} />}
      {page === 'login' && <UserLogin onNext={handleLoginNext} onBack={handleBackToHome} />}
      {page === 'shiftlog' && <ShiftLog onBack={handleBackToLogin} onStartShift={handleStartShift} />}
      {page === 'moodcheck' && <MoodCheck onBack={handleBackToShiftLog} onNext={handleNextFromMoodCheck} />}
      {page === 'sleepcheck' && <SleepCheck onBack={handleBackToMoodCheck} onNext={handleNextFromSleepCheck} />}
      {page === 'stresscheck' && <StressCheck onBack={handleBackToSleepCheck} onNext={handleNextFromStressCheck} />}
      {page === 'foodintake' && <FoodIntake onBack={handleBackToStressCheck} onNext={handleNextFromFoodIntake} />}
      {page === 'mentalclaritya' && <MentalClarityA onBack={handleBackToFoodIntake} onNext={handleNextFromMentalClarityA} />}
    </div>
  );
}

export default App;
