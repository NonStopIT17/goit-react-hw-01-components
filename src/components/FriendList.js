import './FriendList.modyle.css';
import PropTypes from 'prop-types';
export default function FriendList({ name, avatar, isOnline }) {
  let bgColor = 'red';
  if (isOnline) {
    bgColor = 'green';
  }
  return (
    <li className="item">
      <span className="status" style={{ backgroundColor: bgColor }}>
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};