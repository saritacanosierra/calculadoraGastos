import { CircularProgressbar } from 'react-circular-progressbar';
import './estadoAhorro.css';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';


const EstadoAhorro = ({ totalAhorro, metaAhorro, gastos }) => {
    console.log("Total Ahorro:", totalAhorro);
    console.log("Gastos:", gastos);
    const totalDisponible = totalAhorro - (gastos || 0);
    console.log("Total Disponible:", totalDisponible);
    console.log("Meta Ahorro:", metaAhorro);

    const porcentajeAhorro = metaAhorro > 0 ? (totalDisponible / metaAhorro) * 100 : 0;
    const valorPorcentaje = isNaN(porcentajeAhorro) ? 0 : porcentajeAhorro;

    return (
        <div className="burbuja-flotante">
            <h2 className='tutulo_progressbar'>Ahorro</h2>
            <CircularProgressbar value={valorPorcentaje} text={`${valorPorcentaje.toFixed(0)}%`} />
        </div>
    );
};



EstadoAhorro.propTypes = {
    totalAhorro: PropTypes.number.isRequired,
    metaAhorro: PropTypes.number.isRequired,
    gastos: PropTypes.number.isRequired,
};

export default EstadoAhorro;
