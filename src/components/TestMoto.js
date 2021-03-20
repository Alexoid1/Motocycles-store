import './TestMoto.css';
import PropTypes from 'prop-types';

const TestMoto = ({
  motocycle, date, city,
}) => (
  <div className="testBox">

    <p>
      <strong>Model:</strong>
      {' '}
      {motocycle.name}
    </p>
    <div><img className="imageTe" src={motocycle.image} alt="motos" /></div>
    <p>
      <strong>Date:</strong>
      {' '}
      {date}
    </p>
    <p>
      <strong>City:</strong>
      {' '}
      {city}
    </p>
  </div>
);

TestMoto.propTypes = {
  motocycle: PropTypes.instanceOf(Object),
  city: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

TestMoto.defaultProps = {
  motocycle: {},
};

export default TestMoto;
