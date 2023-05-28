import './TransactionHistory.modyle.css';
import PropTypes from 'prop-types';
export default function TransactionHistory(props) {
  return (
    <table className="transaction-history">
      <thead className="table">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.items.map(el => (
          <tr key={el.id}>
            <td>{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  props: PropTypes.object,
};
