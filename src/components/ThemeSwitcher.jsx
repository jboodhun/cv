import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Light, Dark } from './icons';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-switcher ${theme === 'light' ? 'dark' : 'light'}`}
    >
      {theme === 'light' ? <Dark /> : <Light />}
    </button>
  );
};

export default ThemeSwitcher;
