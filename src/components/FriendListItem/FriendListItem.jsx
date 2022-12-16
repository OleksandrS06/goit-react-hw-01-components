import css from './FriendListItem.module.css'


export const FriendListItem = ({ id, avatar, isOnline, name }) => {
  return (
    <li className={css.item}>
          <span className={isOnline ? css.online : css.status}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
