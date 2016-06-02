import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';

const Abilities = ({abilities}) => {
  return (
    <div className="pokedex_Component">
      <div><h3>Starting abilities:</h3> {abilities.map(x => {
        return (
          <div>{upperCase(x.ability.name)}</div>
        );
      })}</div>
    </div>
  );
}

Abilities.propTypes = {
  abilities: PropTypes.array.isRequired
}

export default Abilities;
