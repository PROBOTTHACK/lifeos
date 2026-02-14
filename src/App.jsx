import { useState } from 'react'
import './App.css'
import EntryPage from './pages/EntryPage';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Focus from './pages/Focus';
import Tasks from './pages/Tasks';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/focus" element={<Focus />} />
      <Route path="/tasks" element={<Tasks />} />
    </Routes>
  );
}

export default App
