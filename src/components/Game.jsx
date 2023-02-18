import React, { Component } from 'react';
import Prompt from './Prompt';

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(event, item, index, answer) {
    this.props.handleScore(item.displayed === answer);

    // Logic for handling answer
    if(!item.displayed) {
      this.props.items.map(i => {
        if(i === item) {
          i.displayed = true;
          return i;
        } else return i;
      }); 
    }
  }

  randomItemIndex() {
    let rand = Math.floor(Math.random() * this.props.items.length);
    return rand;
  }

  render() {
    const { items, reset } = this.props;
    const index = this.randomItemIndex();
    const item = items[index];

    return ( 
      <main >
        <div className='d-flex justify-content-around align-items-center'>
          <p id={index}>{item.content}</p>
          <Prompt item={item} index={index} handleAnswer={this.handleAnswer} />
        </div>
        {reset && <div id='game-reset'>Game has reset. Please try again</div>}
      </main>
    )
  }
}
