import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nuevas Tecnologias-Cesde</h3>
            <p> “No ahorres lo que queda después de gastar,<br></br> sino gasta lo que queda después de ahorrar.” </p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/form">formulario</a></li>
              <li><a href="/historialGastos">historial Gastos</a></li>

            </ul>
          </div>
          <div className="footer-section">
            <h4>Nombres</h4>
            <p>SaraCristina Cano Sierra</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} . Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

