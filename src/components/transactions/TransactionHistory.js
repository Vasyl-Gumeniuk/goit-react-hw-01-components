import PropTypes from 'prop-types';
import TransactionData from './transitionData/TransactionData';

function TransactionHistory({ items }) {
  return (
    <div>
      <TransactionData transactions={items} />
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TransactionHistory;
