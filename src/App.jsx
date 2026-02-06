import { useState } from 'react'
import './App.css'
import EntryPage from './pages/EntryPage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <EntryPage />
    </div>
  );
}

export default App
