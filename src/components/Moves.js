import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import shortid from 'shortid';

const Moves = ({moves}) => {
  return (
    <div className="pokedex_Component">
      <h3>Moves:</h3>
      {moves.map(x => {
        return (
          <div key={shortid.generate()} className="inlineBlockText">
            {upperCase(x.move.name) + ','}
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
