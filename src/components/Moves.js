import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import shortid from 'shortid';

const Moves = ({moves}) => {
  return (
    <div>
      Moves:
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

export default Moves;
