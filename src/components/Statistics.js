import './Statistics.modyle.css';
import PropTypes from 'prop-types';
export default function Statistics({ title, stats }) {
  let isTitle = false;
  if (title !== '') {
    isTitle = true;
  } else {
    isTitle = false;
  }
  const titleOrg = <h2 className="title">{title}</h2>;

  return (
    <section className="statistics">
      {isTitle ? titleOrg : null}

      <ul className="stat-list">
        <li
          className="item-statistics"
          style={{ backgroundColor: '#bead8f' }}
          key={stats[0].id}
        >
          <span className="label">{stats[0].label}</span>
          <span className="percentage">{stats[0].percentage}%</span>
        </li>
        <li
          className="item-statistics"
          style={{ backgroundColor: '#71601b' }}
          key={stats[1].id}
        >
          <span className="label">{stats[1].label}</span>
          <span className="percentage">{stats[1].percentage}%</span>
        </li>
        <li
          className="item-statistics"
          style={{ backgroundColor: '#832b45' }}
          key={stats[2].id}
        >
          <span className="label">{stats[2].label}</span>
          <span className="percentage">{stats[2].percentage}%</span>
        </li>
        <li
          className="item-statistics"
          style={{ backgroundColor: '#2ff13c' }}
          key={stats[3].id}
        >
          <span className="label">{stats[3].label}</span>
          <span className="percentage">{stats[3].percentage}%</span>
        </li>
        <li
          className="item-statistics"
          style={{ backgroundColor: '#1dfe81' }}
          key={stats[4].id}
        >
          <span className="label">{stats[4].label}</span>
          <span className="percentage">{stats[4].percentage}%</span>
        </li>
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};