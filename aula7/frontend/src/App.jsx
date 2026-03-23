import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/cadastro">Cadastro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App