import React, { Component } from 'react';
import PokedexContainer from '../containers/PokedexContainer';
import '../../scss/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <PokedexContainer />
      </div>
    );
  }
}
