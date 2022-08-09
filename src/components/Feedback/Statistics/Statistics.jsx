import PropTypes from 'prop-types';
import { StatisticsList } from './Statistics.styled';

export const Statistics = ({
  neutral,
  good,
  bad,
  summFeedback,
  positiveFeedbac,
}) => {
  return (
    <StatisticsList>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {summFeedback}</li>
      <li>Positive feedback: {positiveFeedbac}%</li>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  summFeedback: PropTypes.number.isRequired,
  positiveFeedbac: PropTypes.number.isRequired,
};
