import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import shortid from 'shortid';

const Versions = ({versions}) => {
  return (
    <div className="pokemon__Versions">
      <div>Games this Pokemon appears in:</div>
      {versions.map(x => {
        return (
          <div key={shortid.generate()}>
            {upperCase(x.version.name)}
          </div>
        );
      })}
    </div>
  );
}

Versions.propTypes = {
  versions: PropTypes.array.isRequired
}

export default Versions;
