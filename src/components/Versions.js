import React, { Component, PropTypes } from 'react';
import { upperCase } from '../helpers/helpers';
import shortid from 'shortid';

const Versions = ({versions}) => {
  return (
    <div>
      Games this Pokemon appears in:
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

export default Versions;
