import PropTypes from 'prop-types';
import s from './Statistics.module.css';
const Statistics = ({ stats, title }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              style={{ backgroundColor: randomColor() }}
              className={s.item}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
export default Statistics;

function randomColor() {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
}

// import data from '/path/to/data.json';

// <Statistics title="Upload stats" stats={data} />
// <Statistics stats={data} />
