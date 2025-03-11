import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router';
import { Landing } from './pages/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Landing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
