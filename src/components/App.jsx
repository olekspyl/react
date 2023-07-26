import { Component } from 'react';
import { ButtonEl } from './buttonEl'
import { Stats } from './Stats'
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
    
  handleButton = (e) => {
    const item = e.target.textContent;
        switch (item) {
          case 'good':
            this.setState(prevState => ({ good: prevState.good + 1 }))
            break;
          case 'neutral':
            this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
            break;
          case 'bad':
            this.setState(prevState => ({ bad: prevState.bad + 1 }))
            break;
          default:
            return null;
        }
  }
  
  countTotalFeedback = () => {
    const total = Object.values(this.state);
  return total.reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage = () => {
    const positive = this.state.good;
    return positive > 0 ? Math.round((positive / this.countTotalFeedback()) * 100) : 0;
  }

  render() {
    const total = this.countTotalFeedback();

    return (
      <Container>
        <h1>Please, leave feedback</h1>
        <ul>
          <ButtonEl handleButton={this.handleButton} stats={{ ...this.state }}
           ></ButtonEl>
        </ul>
          <h2>Statistics</h2>
          {total && <ul>
          <Stats stats={{ ...this.state }}
           total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}></Stats>
          </ul>}
      </Container>
    );
  }
}

export { App };
