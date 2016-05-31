import React, { Component, PropTypes } from 'react';

const Pokedex = ({data}) => {
  return (
    <div>
      {data.data.map(x => {
          return (
            <div>
              <div>{x.name}</div>
              <img src={x.sprites.front_default} alt="sprite" />
              <img src={x.sprites.back_default} alt="sprite" />
              <img src={x.sprites.front_shiny} alt="sprite" />
              <img src={x.sprites.back_shiny} alt="sprite" />
              <div>Starting abilities: {x.abilities.map(x => x.ability.name + ' ')}</div>
            </div>
          );
      })}
    </div>
  );
}

export default Pokedex;
