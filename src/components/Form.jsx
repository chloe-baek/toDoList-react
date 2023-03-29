import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Todo.module.css';

export default function TodoForm({ onAdd }) {
  const [item, setItem] = useState('');
  const handleChange = (e) => setItem(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), item, status: 'incomplete' });
    setItem('');
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.form__input}
        type='text'
        placeholder='Add a new task'
        value={item}
        onChange={handleChange}
      />
      <button className={styles.form__btn}>Add</button>
    </form>
  );
}
