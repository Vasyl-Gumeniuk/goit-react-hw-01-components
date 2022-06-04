import PropTypes from 'prop-types';
import FriendListItem from './friendItem/FriendListItem';
import styles from './styles.module.css';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          id={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FriendList;