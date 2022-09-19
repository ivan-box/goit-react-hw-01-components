import FriendListItem from '../FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={s.list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
            />
          );
        })}
      </ul>
    </>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
