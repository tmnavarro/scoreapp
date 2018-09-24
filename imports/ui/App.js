import React, {Component} from 'react';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends Component {
  render() {
    return (
      <div>
        <TitleBar title="Score App" subtitle="Criado por Túlio Navarro"/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer />
        </div>
      </div>
    );
  }
}
