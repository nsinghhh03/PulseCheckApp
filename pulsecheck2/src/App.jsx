// App.jsx
import React, { useState } from 'react';
import Home from './home';
import UserLogin from './Userlogin'; // Import UserLogin component
import ShiftLog from './ShiftLog';

function App() {
  const [page, setPage] = useState('home');

  const handleStart = () => {
    setPage('login'); // Navigate to the login page
  };

  return (
    <div className="app-container">
      {page === 'home' && <Home onStart={handleStart} />}
      {page === 'login' && <UserLogin onBack={() => setPage('home')} />}
    </div>
  );
}

export default App;
