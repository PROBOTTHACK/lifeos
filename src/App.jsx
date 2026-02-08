import { useState } from 'react'
import './App.css'
import EntryPage from './pages/EntryPage';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<EntryPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App
