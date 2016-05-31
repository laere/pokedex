import React, { Component, PropTypes } from 'react';

const Abilities = ({abilities}) => {
  return (
    <div>
      Starting abilities: {abilities.map(x => x.ability.name + ' ')}
    </div>
  );
}

export default Abilities;
