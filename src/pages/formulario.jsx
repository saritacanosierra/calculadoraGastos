import { useState } from 'react';
import './form.css'
import Footer from '../components/footer';
import EstadoAhorro from '../components/estadoAhorro';

function FormularioVista() {
  const [gastos, setGastos] = useState([]);
  const [nuevoGasto, setNuevoGasto] = useState({
    fecha: '',
    descripcion: '',
    valor: '',
    categoria: ''
  });
  const [ingresosMensuales, setIngresos] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [gastoEditando, setGastoEditando] = useState(null);
  const [ingresoEditando, setIngresoEditando] = useState(null);
  const [nuevoIngreso, setNuevoIngreso] = useState({
    descripcion: '',
    valor: ''
  });
  const [metaAhorro, setMetaAhorro] = useState(0);
  const formatoPesoColombianos = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setNombreUsuario(e.target.nombres.value);
    setMetaAhorro(e.target.metaAhorro.value);
  };

  const handleIngresoChange = (e) => {
    const { name, value } = e.target;
    setNuevoIngreso(prevIngreso => ({
      ...prevIngreso,
      [name]: value
    }));
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

  const totalAhorro = ingresosMensuales.reduce((total, ingreso) => total + (parseFloat(ingreso.valor) || 0), 0) - 
                      gastos.reduce((total, gasto) => total + (parseFloat(gasto.valor) || 0), 0); // Calcular el total de ahorro




  return (
    <>
      <div className="container">
        <header className="title">
          <h1>{nombreUsuario ? `Usuarios: ${nombreUsuario}` : 'Usuario:'}</h1>
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
                <input
                  type="number"
                  id="metaAhorro"
                  name="metaAhorro"
                  step="0.01"
                  required
                />
              </div>


              <button className='btnEnviar' type="submit">Enviar</button>
            </form>
          </section>

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
                onClick={nuevoIngreso.fecha && nuevoIngreso.descripcion && nuevoIngreso.valor ?
                  (nuevoIngreso.id !== undefined ? handleActualizarGasto : agregarIngreso) :
                  agregarIngreso}
              >
                {nuevoIngreso.id !== undefined ? 'Actualizar Ingreso' : 'Agregar Ingreso'}
              </button>
            </div>

            <div className="lista-ingresos">
              {ingresosMensuales.map((ingreso, index) => (
                <div key={index} className="ingreso-item">
                  <span>{ingreso.fecha || 'Fecha no disponible'}</span> {/* Asegúrate de que el campo sea 'fecha' */}
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
        </main>
      </div>
      <EstadoAhorro totalAhorro={totalAhorro} metaAhorro={metaAhorro} />
      <Footer/>
    </>
  );
}

export default FormularioVista;
