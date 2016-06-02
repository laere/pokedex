import React, { Component, PropTypes } from 'react';

const Sprites = ({sprites}) => {
  return (
    <div className="pokedex__Sprites">
      <img src={sprites.front_default} alt="sprite" />
      <img src={sprites.back_default} alt="sprite" />
      <img src={sprites.front_shiny} alt="sprite" />
      <img src={sprites.back_shiny} alt="sprite" />
    </div>
  );
}

Sprites.propTypes = {
  sprites: PropTypes.object.isRequired
}

export default Sprites;
