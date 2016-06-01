import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import shortid from 'shortid';

const Type = ({type}) => {
  return (
    <div>
      {type.map(x => {
        return (
          <div key={shortid.generate()}>Type: {upperCase(x.type.name)}</div>
        );
      })}
    </div>
  );
}

Type.propTypes = {
  type: PropTypes.array.isRequired
}

export default Type;
