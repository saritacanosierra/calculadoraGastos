import { Link } from 'react-router-dom';
import "./navbar.css"; // Asegúrate de crear este archivo CSS

function Menu() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-title">
          <h1>Calculadora de Gastos Mensuales</h1>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/formulario">Formulario</Link></li>
          <li><Link to="/historialGastos">Historial</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
