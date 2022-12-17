import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      {stats.length > 0 ? (
        <ul className={css.statList}>
          {stats.map(stat => {
            return (
              <li
                key={stat.id}
                className={css.item}
                style={{ backgroundColor: getRandomColor() }}
              >
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no data to display</p>
      )}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
