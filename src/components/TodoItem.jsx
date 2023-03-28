import React from 'react';
import { BsTrash3 } from 'react-icons/bs';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const { item, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.list}>
      <input
        className={styles.list__checkbox}
        type='checkbox'
        id='checkbox'
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox' className={styles.list__label}>
        {item}
      </label>
      <span className={styles.list__icon}>
        <button onClick={handleDelete} className={styles.list__btn}>
          <BsTrash3 />
        </button>
      </span>
    </li>
  );
}
