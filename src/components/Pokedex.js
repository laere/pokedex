import React, { Component, PropTypes } from 'react';
import Sprites from './Sprites';

const Pokedex = ({data}) => {
  return (
    <div>
      {data.data.map(x => {
          return (
            <div key={x.id}>
              <div>{x.name}</div>
              <Sprites sprites={x.sprites} />
              <div>Starting abilities: {x.abilities.map(x => x.ability.name + ' ')}</div>
            </div>
          );
      })}
    </div>
  );
}

export default Pokedex;
