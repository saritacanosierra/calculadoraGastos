import { useState } from 'react';
import './form.css'
import Footer from '../components/footer';

function FormularioVista() {
  const [gastos, setGastos] = useState([]);
  const [nuevoGasto, setNuevoGasto] = useState({
    fecha: '',
    descripcion: '',
    valor: '',
    categoria: '' // Agregamos la categoría al estado del nuevo gasto
  });
  const [ingresosMensuales, setIngresosMensuales] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [gastoEditando, setGastoEditando] = useState(null);

  const formatoPesoColombianos = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setNombreUsuario(e.target.nombres.value);
  };

  const handleIngresoChange = (e) => {
    setIngresosMensuales(e.target.value);
  };

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

  const handleEditarGasto = (index) => {
    setGastoEditando(index);
    setNuevoGasto(gastos[index]);
  };

  const handleActualizarGasto = () => {
    if (gastoEditando !== null) {
      setGastos(prevGastos => prevGastos.map((gasto, index) =>
        index === gastoEditando ? nuevoGasto : gasto
      ));
      setGastoEditando(null);
      setNuevoGasto({ fecha: '', descripcion: '', valor: '', categoria: '' });
    }
  };

  const handleEliminarGasto = (index) => {
    setGastos(prevGastos => prevGastos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        <header className="title">
          <h1>{nombreUsuario ? `Usuario: ${nombreUsuario}` : 'Usuario:'}</h1>
        </header>

        <main className="container-form">
          <section className="datos-personales">
            <h2>Ingrese sus datos</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombres">Nombres:</label>
                <input type="text" id="nombres" name="nombres" required />
              </div>

              <div className="form-group">
                <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
                <input type="date" id="fechaNacimiento" name="fechaNacimiento" required />
              </div>

              <div className="form-group">
                <label htmlFor="ubicacion">Ubicación:</label>
                <input type="text" id="ubicacion" name="ubicacion" required />
              </div>

              <div className="form-group">
                <label htmlFor="metaAhorro">Meta de Ahorro:</label>
                <input type="number" id="metaAhorro" name="metaAhorro" step="0.01" required />
              </div>

              <div className="form-group">
                <label htmlFor="ingresosMensuales">Ingresos Mensuales Totales:</label>
                <input
                  type="number"
                  id="ingresosMensuales"
                  name="ingresosMensuales"
                  value={ingresosMensuales}
                  onChange={handleIngresoChange}
                  step="0.01"
                  required
                />
              </div>

              <button className='btnEnviar' type="submit">Enviar</button>
            </form>
          </section>

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
                    <span className="material-symbols-outlined">
                        edit
                      </span>
                    </button>
                    <button className="btn-eliminar" onClick={() => handleEliminarGasto(index)}>
                      <span className="material-symbols-outlined">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

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
                  <td>{formatoPesoColombianos.format(parseFloat(ingresosMensuales) || 0)}</td>
                  <td>
                    {formatoPesoColombianos.format(gastos.reduce((total, gasto) => total + (parseFloat(gasto.valor) || 0), 0))}
                  </td>
                  <td>
                    {formatoPesoColombianos.format((parseFloat(ingresosMensuales) || 0) -
                      gastos.reduce((total, gasto) => total + (parseFloat(gasto.valor) || 0), 0))}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
      <Footer className='form_footer' />
    </>
  );
}

export default FormularioVista;
