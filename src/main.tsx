import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';      // ↪️ your Tailwind entrypoint
import App from './App';   // ↪️ your router + pages

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
