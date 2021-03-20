import './Table2.css';
import PropTypes from 'prop-types';

const Table2 = ({
  model, speed, engine, power,
}) => (
  <table className="table2">
    <tbody>
      <tr>
        <td className="td1"><strong>Model:</strong></td>
        <td className="td2">{model}</td>
      </tr>
      <tr>
        <td className="td1"><strong>Speed:</strong></td>
        <td className="td2">
          {speed}
          {' '}
          Km/h
        </td>
      </tr>
      <tr>
        <td className="td1"><strong>Engine:</strong></td>
        <td className="td2">{engine}</td>
      </tr>
      <tr>
        <td className="td1"><strong>Power:</strong></td>
        <td className="td2">{power}</td>
      </tr>
    </tbody>
  </table>
);

Table2.propTypes = {
  model: PropTypes.string.isRequired,
  engine: PropTypes.string.isRequired,
  power: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

export default Table2;
