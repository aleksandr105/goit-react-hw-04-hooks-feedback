import PropTypes from 'prop-types';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import {
  Section,
  Container,
  Title,
  TitleStatistic,
} from './FeedbackSection.styled';
import { useState } from 'react';

export const FeedbackSection = ({ title, titleStatistic }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    const eventName = e.target.textContent.toLowerCase();
    switch (eventName) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const CountTotalFeedback = () => good + neutral + bad;

  const PositiveFeedback = () => {
    let interestSumm = Math.round((good / CountTotalFeedback()) * 100);
    const interest = interestSumm > 0 ? interestSumm : 0;
    return interest;
  };

  return (
    <Section>
      <Container>
        <Title>{title}</Title>
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleFeedback}
        />
        <TitleStatistic>{titleStatistic}</TitleStatistic>
        {CountTotalFeedback() === 0 && (
          <Notification message={'There is no feedback'}></Notification>
        )}
        {CountTotalFeedback() !== 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            summFeedback={CountTotalFeedback()}
            positiveFeedbac={PositiveFeedback()}
          />
        )}
      </Container>
    </Section>
  );
};

FeedbackSection.propTypes = {
  title: PropTypes.string.isRequired,
  titleStatistic: PropTypes.string.isRequired,
};
