import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';

const Type = ({type}) => {
  return (
    <div>
      {type.map(x => {
        return (
          <div>Type: {upperCase(x.type.name)}</div>
        );
      })}
    </div>
  );
}

export default Type;
