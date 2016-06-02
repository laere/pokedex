import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import shortid from 'shortid';

const Versions = ({versions}) => {
  return (
    <div>
      <h3>Games this Pokemon appears in:</h3>
      {versions.map(x => {
        return (
          <div key={shortid.generate()} className="inlineBlockText">
            {upperCase(x.version.name) + ','}
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
