import PropTypes from 'prop-types';
import { formatoPesoColombianos } from 'ruta/del/archivo';

const Gastos = ({ gastos, setGastos, nuevoGasto, setNuevoGasto, gastoEditando, setGastoEditando }) => {
  const handleGastoChange = (e) => {
    const { name, value } = e.target;
    setNuevoGasto(prevGasto => ({
      ...prevGasto,
      [name]: value
    }));
  };

  const agregarGasto = () => {
    if (nuevoGasto.fecha && nuevoGasto.descripcion && nuevoGasto.valor) {
      setGastos(prevGastos => [...prevGastos, nuevoGasto]);
      setNuevoGasto({ fecha: '', descripcion: '', valor: '', categoria: '' });
    }
  };

  const handleActualizarGasto = (index) => {
    const gastoActualizado = { ...nuevoGasto };
    setGastos(prevGastos => {
      const gastosActualizados = [...prevGastos];
      gastosActualizados[index] = gastoActualizado;
      return gastosActualizados;
    });
    setGastoEditando(null);
    setNuevoGasto({ fecha: '', descripcion: '', valor: '', categoria: '' });
  };

  const handleEditarGasto = (index) => {
    setGastoEditando(index);
    setNuevoGasto(gastos[index]);
  };

  const handleEliminarGasto = (index) => {
    setGastos(prevGastos => prevGastos.filter((_, i) => i !== index));
  };

  Gastos.propTypes = {
    nuevoGasto: PropTypes.shape({
      fecha: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired,
      categoria: PropTypes.string.isRequired,
    }).isRequired,
    gastos: PropTypes.arrayOf(PropTypes.shape({
      fecha: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      valor: PropTypes.number.isRequired,
      categoria: PropTypes.string.isRequired,
    })).isRequired,
    setGastos: PropTypes.func.isRequired,
    setNuevoGasto: PropTypes.func.isRequired,
    gastoEditando: PropTypes.number,
    setGastoEditando: PropTypes.func.isRequired,
  };

  return (
    <section className="gastos">
      <h2>Gastos</h2>
      <div className="formulario-gastos">
        <div className="input-grupo">
          <label htmlFor="fecha-gasto">Fecha:</label>
          <input
            id="fecha-gasto"
            type="date"
            name="fecha"
            value={nuevoGasto.fecha}
            onChange={handleGastoChange}
            required
          />
        </div>
        <div className="input-grupo">
          <label htmlFor="descripcion-gasto">Descripción:</label>
          <input
            id="descripcion-gasto"
            type="text"
            name="descripcion"
            value={nuevoGasto.descripcion}
            onChange={handleGastoChange}
            placeholder="Descripción"
            required
          />
        </div>
        <div className="input-grupo">
          <label htmlFor="valor-gasto">Valor:</label>
          <input
            id="valor-gasto"
            type="number"
            name="valor"
            value={nuevoGasto.valor}
            onChange={handleGastoChange}
            placeholder="Valor"
            step="0.01"
            required
          />
        </div>
        <div className="input-grupo">
          <label htmlFor="categoria-gasto">Categoría:</label>
          <select
            id="categoria-gasto"
            name="categoria"
            value={nuevoGasto.categoria}
            onChange={handleGastoChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value="alimentacion">Alimentación</option>
            <option value="transporte">Transporte</option>
            <option value="vivienda">Vivienda</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="salud">Salud</option>
            <option value="educacion">Educación</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <button
          className='btnAgregarGasto'
          type="button"
          onClick={gastoEditando !== null ? handleActualizarGasto : agregarGasto}
        >
          {gastoEditando !== null ? 'Actualizar Gasto' : 'Agregar Gasto'}
        </button>
      </div>

      <div className="lista-gastos">
        {gastos.map((gasto, index) => (
          <div key={index} className="gasto-item">
            <span>{gasto.fecha}</span>
            <span>{gasto.descripcion}</span>
            <span>{formatoPesoColombianos.format(parseFloat(gasto.valor) || 0)}</span>
            <span>{gasto.categoria}</span>
            <div className="gasto-acciones">
              <button className="btn-editar" onClick={() => handleEditarGasto(index)}>
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button className="btn-eliminar" onClick={() => handleEliminarGasto(index)}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gastos; 