import  { useState } from 'react';
import './historialGastos.css';
import Footer from '../components/footer';

function Historial() {
  const [filtro, setFiltro] = useState('');
  
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Función para filtrar las filas
  const filasFiltradas = meses.filter(mes =>
    mes.toLowerCase().includes(filtro.toLowerCase()) ||
    '0'.includes(filtro) // Esto filtrará por los valores de ingresos, gastos y ahorro
  );

  return (
    <div className="historial-container">
      <div className="historial-content">
        <h1 className="historial_title">Historial</h1>
        <input
          type="text"
          placeholder="Filtrar..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="historial-filter"
        />

        <table className="historial-table">
          <thead>
            <tr>
              <th className="historial-th">Mes</th>
              <th className="historial-th">Ingresos</th>
              <th className="historial-th">Gastos</th>
              <th className="historial-th">Ahorro</th>
            </tr>
          </thead>
          <tbody>
            {filasFiltradas.map((mes, index) => (
              <tr key={mes} className={index % 2 === 0 ? 'historial-tr-even' : 'historial-tr-odd'}>
                <td className="historial-td">{mes}</td>
                <td className="historial-td">0</td>
                <td className="historial-td">0</td>
                <td className="historial-td">0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer className="historial-footer" />
    </div>
  );
}

export default Historial;
