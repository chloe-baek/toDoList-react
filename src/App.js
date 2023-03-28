import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoHeader from './components/TodoHeader';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <TodoHeader
        filters={filters}
        filter={filter}
        onChange={(filter) => setFilter(filter)}
      />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
