import React, { useState } from 'react';
import List from './components/List';
import Header from './components/Header';
import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';

const filters = ['all', 'active', 'completed'];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onChange={(filter) => setFilter(filter)}
      />
      <List filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
