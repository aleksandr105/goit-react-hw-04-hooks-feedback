import PropTypes from 'prop-types';
import {
  OptionList,
  OptionItems,
  OptionButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionList>
      {options.map(el => (
        <OptionItems key={el}>
          <OptionButton type="button" onClick={onLeaveFeedback}>
            {el}
          </OptionButton>
        </OptionItems>
      ))}
    </OptionList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
