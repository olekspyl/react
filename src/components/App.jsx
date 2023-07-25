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


  getEvaluations() {
    return { ...this.state };
  }   
    
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



  render() {
    return (
      <Container>
        <h1>Please, leave feedback</h1>
        <ul>
          <ButtonEl handleButton={this.handleButton} stats={this.getEvaluations()} ></ButtonEl>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <Stats stats={this.getEvaluations()}></Stats>
        </ul>
      </Container>
    );
  }
}

export { App };
