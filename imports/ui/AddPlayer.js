import React, {Component} from 'react';


import {Players} from '../api/players';

export default class AddPlayer extends Component {

  handleSumit(e) {
    let playerName = e.target.playerName;
    e.preventDefault();

    if (playerName) {
      Players.insert({
        name: playerName.value,
        score: 0
      });
      e.target.playerName.value = '';
    }
  }

  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSumit.bind(this)}>
          <input className="form__input" type="text" name="playerName" placeholder="Player Name"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
