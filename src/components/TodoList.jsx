import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  const [lists, setLists] = useState([
    {
      id: '12',
      item: 'clean a room',
      status: 'active',
    },
    {
      id: '13',
      item: 'study',
      status: 'active',
    },
  ]);
  const handleAdd = (newItem) => setLists([...lists, newItem]);
  const handleUpdate = (updatedItem) =>
    setLists(lists.map((l) => (l.id === updatedItem.id ? updatedItem : l)));
  const handleDelete = (deletedItem) =>
    setLists(lists.filter((l) => l.id !== deletedItem.id));

  const filtered = getFilteredItems(lists, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.container__ul}>
        {filtered.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <TodoForm onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(lists, filter) {
  if (filter === 'all') {
    return lists;
  }
  return lists.filter((list) => list.status === filter);
}
