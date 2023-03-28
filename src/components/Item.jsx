import React from 'react';
import { BsTrash3 } from 'react-icons/bs';
import styles from './Todo.module.css';

export default function Item({ todo, onUpdate, onDelete }) {
  const { id, item, status } = todo;
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
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.list__label}>
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
