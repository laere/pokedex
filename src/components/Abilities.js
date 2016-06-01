import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';

const Abilities = ({abilities}) => {
  return (
    <div className="pokemon__Abilities">
      <div>Starting abilities: {abilities.map(x => upperCase(x.ability.name) + ' ')}</div>
    </div>
  );
}

Abilities.propTypes = {
  abilities: PropTypes.array.isRequired
}

export default Abilities;
