import { Component } from 'react';
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header"

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentScore: 0,
      bestScore: 0,
    }

    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(increment) {
    if(increment) {
      this.setState({
        currentScore: this.state.currentScore + 1,
      });
    } else {
      this.setState({
        currentScore: 0,
        bestScore: this.state.bestScore < this.state.currentScore ? this.state.currentScore : this.state.bestScore,
      });
    }
  }

  render() {
    const { currentScore, bestScore } = this.state;
    return (
      <div className='App'>
        <Header currentScore={currentScore} bestScore={bestScore} />
        <Game handleScore={this.handleScore} />
      </div>
    )
  }
}

