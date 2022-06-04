import ProfileList from './profile/ProfileList';
import StatisticsList from './statistics/StatisticsList';
import FriendList from './friends/FriendList';
import TransactionHistory from './transactions/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import styles from './styles.module.css';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileList user={user} />
      <StatisticsList data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
