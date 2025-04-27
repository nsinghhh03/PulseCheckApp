"use client";

import React, { useState, useEffect } from 'react';
import Home from './home.jsx';
import UserLogin from './UserLogin.jsx';
import ShiftLog from './ShiftLog.jsx';
import MoodCheck from './MoodCheck.jsx';
import SleepCheck from './SleepCheck.jsx';
import FoodIntake from './FoodIntake.jsx';
import MentalClarityA from './MentalClarityA.jsx';
import Exit from './Exit.jsx';
import Stats from './Stats.jsx';
import AISummary from './AISummary.jsx'; // AI Summary Page

function App() {
  const [page, setPage] = useState('home');
  const [userId, setUserId] = useState(null);
  const [shift, setShift] = useState(null);
  const [mood, setMood] = useState(null);
  const [sleep, setSleep] = useState(null);

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      setUserId(storedId);
    }
  }, []);

  const goTo = (pageName) => setPage(pageName);

  return (
    <div className="app-container">
      {page === 'home' && <Home onStart={() => goTo('login')} />}
      {page === 'login' && <UserLogin onLogin={(id) => { setUserId(id); localStorage.setItem('userId', id); goTo('shiftlog'); }} onBack={() => goTo('home')} />}
      {page === 'shiftlog' && <ShiftLog onBack={() => goTo('login')} onStartShift={() => goTo('moodcheck')} />}
      {page === 'moodcheck' && <MoodCheck onBack={() => goTo('shiftlog')} onNext={() => goTo('sleepcheck')} />}
      {page === 'sleepcheck' && <SleepCheck onBack={() => goTo('moodcheck')} onNext={() => goTo('foodintake')} />}
      {page === 'foodintake' && <FoodIntake onBack={() => goTo('sleepcheck')} onNext={() => goTo('mentalclaritya')} />}
      {page === 'mentalclaritya' && <MentalClarityA onBack={() => goTo('foodintake')} onNext={() => goTo('exit')} />}
      {page === 'exit' && <Exit onBack={() => goTo('home')} onViewStats={() => goTo('stats')} />}
      {page === 'stats' && <Stats onBack={() => goTo('exit')} onViewAISummary={() => goTo('aisummary')} />}
      {page === 'aisummary' && <AISummary onBack={() => goTo('stats')} />}
    </div>
  );
}

export default App;