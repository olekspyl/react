import { useState } from 'react';
import { ButtonEl } from './buttonEl'
import { Stats } from './Stats'
import { Notification } from './notification';
import { Container } from './App.styled';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const obj = {good, neutral, bad}

  const handleButton = (e) => {
    const item = e.target.textContent;
        switch (item) {
          case 'good':
            setGood(prevState => prevState + 1)
            break;
          case 'neutral':
            setNeutral(prevState => prevState + 1)
            break;
          case 'bad':
            setBad(prevState => prevState + 1)
            break;
          default:
            return null;
        }
  }

  const countTotalFeedback = () => {
    const total = Object.values(obj);
    return total.reduce((acc, value) => acc + value, 0);
  }

  const countPositiveFeedbackPercentage = () => {
    return good > 0 ? Math.round((good / countTotalFeedback()) * 100) : 0;
  }

  const total = countTotalFeedback();

  return (
      <Container className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <h1>Please, leave feedback</h1>
        <ul>
          <ButtonEl handleButton={handleButton} stats={obj}
           ></ButtonEl>
        </ul>
        <h2>Statistics</h2>
        {!total && <Notification></Notification>}
          {total && <ul>
          <Stats stats={obj}
           total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}></Stats>
          </ul>}
      </Container>
    );
}

