import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/login.board'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div style={{ padding: '20px' }}>Home - Edit src/App.tsx</div>} />
        {/* Public Route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
