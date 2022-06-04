import PropTypes from 'prop-types';
import styles from './styles.module.css';

function TransactionData({ transactions }) {
  return (
    <div>
      <table className={styles.transactionHistory}>
        <thead>
          <tr>
            <th className={styles.tsbleHead}>Type</th>
            <th className={styles.tsbleHead}>Amount</th>
            <th className={styles.tsbleHead}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} className={styles.row}>
              <td className={styles.col}>{transaction.type}</td>
              <td className={styles.col}>{transaction.amount}</td>
              <td className={styles.col}>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionData.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionData;
