import { BrowserRouter, Routes, Route } from 'react-router'
import InicioPage from './pages/inicio'
import LoginPage from './pages/login'
import CadastroPage from './pages/cadastro'
import './index.css'

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<InicioPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/cadastro" element={<CadastroPage/>} />
    </Routes>
  </BrowserRouter>,
    </>
  )
}

export default App
