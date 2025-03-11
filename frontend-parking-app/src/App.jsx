import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>

          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
