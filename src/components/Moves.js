import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import shortid from 'shortid';

const Moves = ({moves}) => {
  return (
    <div className="pokemon__Moves">
      <div>Moves:</div>
      {moves.map(x => {
        return (
          <div key={shortid.generate()}>
            {upperCase(x.move.name)}
          </div>
        );
      })}
    </div>
  );
}

Moves.propTypes = {
  moves: PropTypes.array.isRequired
}

export default Moves;
