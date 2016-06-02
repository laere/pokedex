import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import shortid from 'shortid';
import Type from './Type';
import Sprites from './Sprites';
import Abilities from './Abilities';
import Stats from './Stats';
import Moves from './Moves';
import Versions from './Versions'
// import Evolution from './Evolution';

const Pokedex = ({data}) => {
  return (
    <div>
      {data.data.map(x => {
          return (
            <div key={shortid.generate()}>
              <Sprites sprites={x.sprites} />
              <h3>Name:</h3>
              <div>{upperCase(x.name)}</div>
              <Type type={x.types} />
              <Abilities abilities={x.abilities} />
              <Stats stats={x.stats} />
              <Moves moves={x.moves} />
              <Versions versions={x.game_indices} />
              {/*<Evolution evolution={evolution} pokeId={x.id} onEvolutionClick={onEvolutionClick} />*/}
            </div>
          );
      })}
    </div>
  );
}

export default Pokedex;
