import PropTypes from 'prop-types';

const Resultados = ({ ingresosMensuales, gastos, formatoPesoColombianos, totalAhorro }) => {
  console.log('Ingresos Mensuales:', ingresosMensuales);
  console.log('Gastos:', gastos);
  console.log('Total Ahorro:', totalAhorro);

  return (
    <section className="container-resultados">
      <h2>Resultados</h2>
      <table className="tabla-resultados">
        <thead>
          <tr>
            <th>Ingresos Mensuales</th>
            <th>Total de Gastos</th>
            <th>Valor del Ahorro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formatoPesoColombianos.format(ingresosMensuales.reduce((total, ingreso) => total + (parseFloat(ingreso.valor) || 0), 0))}</td>
            <td>
              {formatoPesoColombianos.format(gastos.reduce((total, gasto) => total + (parseFloat(gasto.valor) || 0), 0))}
            </td>
            <td>
              {formatoPesoColombianos.format(totalAhorro)}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

Resultados.propTypes = {
  ingresosMensuales: PropTypes.array.isRequired,
  gastos: PropTypes.array.isRequired,
  formatoPesoColombianos: PropTypes.object.isRequired,
  totalAhorro: PropTypes.number.isRequired,
};

export default Resultados; 