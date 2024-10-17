import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Formulario from "./pages/form"
import Menu from './components/navbar'
import Historial from './pages/historialGastos'


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/historialGastos" element={<Historial />} />


      </Routes>
    </Router>
  )
}

export default App
