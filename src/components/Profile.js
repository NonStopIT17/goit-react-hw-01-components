import PropTypes from 'prop-types';
import './Profile.modyle.css';
export default function User({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} className="avatar-profile" />
        <p className="name-profile">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="list">
          <span className="label-profile">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li className="list">
          <span className="label-profile">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li className="list">
          <span className="label-profile">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};