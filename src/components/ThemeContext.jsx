// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('brown');  // Default theme is light

  // Apply theme to root CSS variables based on the theme
  useEffect(() => {
    if (theme === 'red') {
      // Dark theme using the brown palette
      document.documentElement.style.setProperty('--primary-color', '#D84040');        // Red primary color
      document.documentElement.style.setProperty('--secondary-color', '#BF3131');      // Darker brown secondary color
      document.documentElement.style.setProperty('--accent-color', '#EEEEEE');         // Light brown accent color
      document.documentElement.style.setProperty('--bg-color', '#1D1616');             // Dark brown background
      document.documentElement.style.setProperty('--text-color', '#FEFEFE');           // White text for contrast
    } else if (theme === 'green') {
      // Light theme using the brown palette (or your light scheme)
      document.documentElement.style.setProperty('--primary-color', '#31511E');        // Light primary color (deep brown)
      document.documentElement.style.setProperty('--secondary-color', '#859F3D');      // Light brown accent
      document.documentElement.style.setProperty('--accent-color', '#FEFEFE');         // Light accent color (off-white)
      document.documentElement.style.setProperty('--bg-color', '#1A1A19');             // Background color matching primary
      document.documentElement.style.setProperty('--text-color', '#000');              // Dark text on light background
    } else if (theme === 'brown') {
        // Light theme using the brown palette (or your light scheme)
        document.documentElement.style.setProperty('--primary-color', '#24211C');        // Light primary color (deep brown)
        document.documentElement.style.setProperty('--secondary-color', '#A5845B');      // Light brown accent
        document.documentElement.style.setProperty('--accent-color', '#FEFEFE');         // Light accent color (off-white)
        document.documentElement.style.setProperty('--bg-color', '#24211C');             // Background color matching primary
        document.documentElement.style.setProperty('--text-color', '#000');              // Dark text on light background
      }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'brown' ? 'red' : (prevTheme === 'red' ? 'green' : 'brown')));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
