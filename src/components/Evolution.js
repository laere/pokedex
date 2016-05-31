import React, { Component, PropTypes } from 'react';

const Evolution = ({evolution, pokeId, onEvolutionClick}) => {
  return (
    <div>
      <button onClick={(e, id) => onEvolutionClick(e, pokeId)}>Evolution Chain</button>
      {evolution.map(x => {
        return (
          <div key={x.id}>
            <div>{x.chain.species.name}</div>
            {x.chain.evolves_to.map(x => {
              return (
                <div>
                  <div>{x.species.name}</div>
                  <div>{x.evolves_to.map(x => x.species.name)}</div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Evolution;
