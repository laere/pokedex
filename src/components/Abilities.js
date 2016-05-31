import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';

const Abilities = ({abilities}) => {
  return (
    <div>
      Starting abilities: {abilities.map(x => upperCase(x.ability.name) + ' ')}
    </div>
  );
}

export default Abilities;
