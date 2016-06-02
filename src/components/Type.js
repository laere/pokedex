import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import shortid from 'shortid';

const Type = ({type}) => {
  return (
    <div>
      {type.map(x => {
        return (
          <div>
            <h3>Type:</h3>
            <div key={shortid.generate()}>{upperCase(x.type.name)}</div>
          </div>
        );
      })}
    </div>
  );
}

Type.propTypes = {
  type: PropTypes.array.isRequired
}

export default Type;
