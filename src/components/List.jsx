import React, { useEffect, useState } from 'react';
import Form from './Form';
import Item from './Item';
import styles from './Todo.module.css';

export default function List({ filter }) {
  const [lists, setLists] = useState(() => readTodoList());
  const handleAdd = (newItem) => setLists([...lists, newItem]);
  const handleUpdate = (updatedItem) =>
    setLists(lists.map((l) => (l.id === updatedItem.id ? updatedItem : l)));
  const handleDelete = (deletedItem) =>
    setLists(lists.filter((l) => l.id !== deletedItem.id));

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);
  const filtered = getFilteredItems(lists, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.container__ul}>
        {filtered.map((item) => (
          <Item
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <Form onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(lists, filter) {
  if (filter === 'all') {
    return lists;
  }
  return lists.filter((list) => list.status === filter);
}

function readTodoList() {
  // console.log('readTodo');
  const todos = localStorage.getItem('lists');
  return todos ? JSON.parse(todos) : [];
}
