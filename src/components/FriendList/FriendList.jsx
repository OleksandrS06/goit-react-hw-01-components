import PropTypes from 'prop-types';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return friends.length > 0 ? (
    <ul className="friend-list">
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            isOnline={isOnline}
            name={name}
          />
        );
      })}
    </ul>
  ) : (
    <p>You haven't added friends</p>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
