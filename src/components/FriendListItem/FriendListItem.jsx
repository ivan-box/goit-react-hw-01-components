const FriendListItem = (avatar, name, isOnline) => {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src="" alt="User avatar" width="48" />
      <p className="name"></p>
    </li>
  );
};

export default FriendListItem;

// import friends from 'path/to/friends.json';

// <FriendList friends={friends} />;
