import PropTypes from 'prop-types';
import { formatoPesoColombianos } from 'ruta/del/modulo';

const Ingresos = ({ ingresosMensuales, setIngresos, nuevoIngreso, setNuevoIngreso, ingresoEditando, setIngresoEditando }) => {
  const handleIngresoChange = (e) => {
    const { name, value } = e.target;
    setNuevoIngreso(prevIngreso => ({
      ...prevIngreso,
      [name]: value
    }));
  };

  const agregarIngreso = () => {
    if (nuevoIngreso.fecha && nuevoIngreso.descripcion && nuevoIngreso.valor) {
      setIngresos(prevIngreso =>
        ingresoEditando !== null
          ? prevIngreso.map((ingreso, index) => index === ingresoEditando ? { ...nuevoIngreso, id: ingreso.id } : ingreso)
          : [...prevIngreso, { ...nuevoIngreso, fecha: nuevoIngreso.fecha }]
      );
      setNuevoIngreso({ fecha: '', descripcion: '', valor: '' });
      setIngresoEditando(null);
    }
  };

  const handleEditarIngreso = (index) => {
    setIngresoEditando(index);
    setNuevoIngreso(ingresosMensuales[index]);
  };

  const handleEliminarIngreso = (index) => {
    setIngresos(prevIngresos => prevIngresos.filter((_, i) => i !== index));
  };

  return (
    <section className="ingresos">
      <h2>Ingresos Mensuales</h2>
      <div className="formulario-ingresos">
        <div className="input-grupo">
          <label htmlFor="fecha-ingreso">Fecha:</label>
          <input
            id="fecha-ingreso"
            type="date"
            name="fecha"
            value={nuevoIngreso.fecha}
            onChange={handleIngresoChange}
            required
          />
        </div>
        <div className="input-grupo">
          <label htmlFor="descripcion-ingreso">Descripción:</label>
          <input
            id="descripcion-ingreso"
            type="text"
            name="descripcion"
            value={nuevoIngreso.descripcion}
            onChange={handleIngresoChange}
            placeholder="Descripción"
            required
          />
        </div>
        <div className="input-grupo">
          <label htmlFor="valor-ingreso">Valor:</label>
          <input
            id="valor-ingreso"
            type="number"
            name="valor"
            value={nuevoIngreso.valor}
            onChange={handleIngresoChange}
            placeholder="Valor"
            step="0.01"
            required
          />
        </div>

        <button
          className='btnAgregarIngreso'
          type="button"
          onClick={agregarIngreso}
        >
          {ingresoEditando !== null ? 'Actualizar Ingreso' : 'Agregar Ingreso'}
        </button>
      </div>

      <div className="lista-ingresos">
        {ingresosMensuales.map((ingreso, index) => (
          <div key={index} className="ingreso-item">
            <span>{ingreso.fecha || 'Fecha no disponible'}</span>
            <span>{ingreso.descripcion}</span>
            <span>{formatoPesoColombianos.format(parseFloat(ingreso.valor) || 0)}</span>
            <div className="ingreso-acciones">
              <button className="btn-editar" onClick={() => handleEditarIngreso(index)}>
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button className="btn-eliminar" onClick={() => handleEliminarIngreso(index)}>
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Ingresos.propTypes = {
  ingresosMensuales: PropTypes.array.isRequired,
  setIngresos: PropTypes.func.isRequired,
  nuevoIngreso: PropTypes.object.isRequired,
  setNuevoIngreso: PropTypes.func.isRequired,
  ingresoEditando: PropTypes.number,
  setIngresoEditando: PropTypes.func.isRequired,
};

export default Ingresos; 