
import './historialGastos.css';

function Historial() {
  const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  return (
    <div className="historial-container">
      <h1 className="historial-title">Historial</h1>
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
          {meses.map((mes, index) => (
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
  );
}

export default Historial;
