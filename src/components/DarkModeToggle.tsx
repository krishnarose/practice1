import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-800 text-white rounded"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
    
    </>
    
  );
};

export default DarkModeToggle;
