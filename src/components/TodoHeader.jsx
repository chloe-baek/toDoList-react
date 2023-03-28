import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import styles from './TodoHeader.module.css';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function TodoHeader({ filters, filter, onChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  // const handleDarkMode = () => {toggleDarkMode}
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.header__ul}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onChange(value)}
              className={`${styles.header__btn} ${
                filter === value && styles.selected
              }`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
