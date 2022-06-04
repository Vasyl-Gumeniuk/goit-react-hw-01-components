import PropTypes from 'prop-types';
import Statistics from './statisticItems/Statistics';

function StatisticsList({ data }) {
  return (
    <div>
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default StatisticsList;
