import PropTypes from 'prop-types';
import './Table1.css';

const Table1 = ({ price }) => {
  const numMonths = 1000;
  return (
    <table className="table1">
      <tbody>
        <tr>
          <td>Finance Fee</td>
          <td>
            $
            {Math.floor(price / numMonths)}
          </td>
        </tr>
        <tr>
          <td>Option to purchase fee</td>
          <td>
            $
            {Math.floor(price / (numMonths / 2))}
          </td>
        </tr>
        <tr>
          <td>Total Price</td>
          <td>
            $
            {price}
          </td>
        </tr>
        <tr>
          <td>Duration</td>
          <td>
            {numMonths}
            {' '}
            Months
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Table1.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Table1;
