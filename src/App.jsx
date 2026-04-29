import { BrowserRouter, Routes, Route } from 'react-router'
import InicioPage from './pages/inicio'
import LoginPage from './pages/login'
import CadastroPage from './pages/cadastro'
import './index.css'
import MeusAnunciosPage from './pages/meusAnunciosPage'
import Anuncios from './components/Anuncios'
import DetalheAnuncioPage from './pages/detalheAnuncio'

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<InicioPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/cadastro" element={<CadastroPage/>} />
      <Route path="/meusAnuncios" element={<MeusAnunciosPage/>}/>
      <Route path="/Anuncios" element={<Anuncios/>}/>
      <Route path="/:id" element={<DetalheAnuncioPage/>}/>
    </Routes>
  </BrowserRouter>,
    </>
  )
}

export default App
