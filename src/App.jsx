import "./App.css";
import { Component } from 'react';
import Game from "./components/Game";
import Header from "./components/Header"

const items = [];
for(let i=65; i<75; i++) {
  items.push({
    id: i,
    content: String.fromCharCode(i),
    displayed: false,
  });
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentScore: 0,
      bestScore: 0,
      items,
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
      this.setItems();
    }
  }

  setItems() {
    const newItems = [];
    for(let i=65; i<75; i++) {
      newItems.push({
        id: i,
        content: String.fromCharCode(i),
        displayed: false,
      });
    }
    this.setState({
      items: newItems,
    });
  }

  render() {
    const { currentScore, bestScore, items } = this.state;
    return (
      <div className='App'>
        <Header currentScore={currentScore} bestScore={bestScore} />
        <Game handleScore={this.handleScore} items={items} />
      </div>
    )
  }
}