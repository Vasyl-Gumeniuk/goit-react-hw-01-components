import PropTypes from 'prop-types';
import Profile from './profileItem/Profile';
import styles from './styles.module.css';

function ProfileList({ user }) {
  return (
    <div className={styles.profileList}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

ProfileList.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default ProfileList;
