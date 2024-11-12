import { useState } from 'react';
import PropTypes from 'prop-types';

const DatosPersonales = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    nombres: '',
    fechaNacimiento: '',
    ubicacion: '',
    metaAhorro: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <section className="datos-personales">
      <h2>Ingrese sus datos</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="nombres">Nombres:</label>
          <input type="text" id="nombres" name="nombres" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input type="date" id="fechaNacimiento" name="fechaNacimiento" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="ubicacion">Ubicación:</label>
          <input type="text" id="ubicacion" name="ubicacion" required onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="metaAhorro">Meta de Ahorro:</label>
          <input
            type="number"
            id="metaAhorro"
            name="metaAhorro"
            step="0.01"
            required
            onChange={handleChange}
          />
        </div>

        <button className='btnEnviar' type="submit">Enviar</button>
      </form>
    </section>
  );
};

DatosPersonales.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default DatosPersonales; 