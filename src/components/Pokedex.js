import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import Type from './Type';
import Sprites from './Sprites';
import Abilities from './Abilities';
import Stats from './Stats';

const Pokedex = ({data, onEvolutionClick}) => {
  return (
    <div>
      {data.data.map(x => {
          return (
            <div key={x.id}>
              <div>Name: {upperCase(x.name)}</div>
              <Type type={x.types} />
              <Sprites sprites={x.sprites} />
              <Abilities abilities={x.abilities} />
              <Stats stats={x.stats} />
              <button onClick={(e, id) => onEvolutionClick(e, x.id)}>Evolution Chain</button>
            </div>
          );
      })}
    </div>
  );
}

export default Pokedex;
