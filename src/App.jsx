import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Menu from './components/navbar'
import Historial from './pages/historialGastos'
import FormularioVista from './pages/formulario'


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<FormularioVista />} />
        <Route path="/historialGastos" element={<Historial />} />


      </Routes>
    </Router>
  )
}

export default App
