import React, { useState, useEffect } from 'react';
import '../styles/Layout.css'

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Apply the dark-mode class to the body element
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <div className="theme-toggle-container">
      <span className={`toggle-text ${!isDark ? 'active-text' : ''}`}>Light</span>
      <label className="switch">
        <input 
          type="checkbox"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
        />
        <span className="slider round"></span>
      </label>
      <span className={`toggle-text ${isDark ? 'active-text' : ''}`}>Dark</span>
    </div>
  );
};

export default DarkModeToggle;