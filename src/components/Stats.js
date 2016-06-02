import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';
import { upperCase } from '../helpers/helpers';

const Stats = ({stats}) => {
  return (
    <div>
      <h3>Stats:</h3>
      {stats.map(x => {
        return (
          <div key={shortid.generate()}>
            <span>{upperCase(x.stat.name)}: {x.base_stat}</span>
          </div>
        );
      })}
    </div>
  );
}

Stats.propTypes = {
  stats: PropTypes.array.isRequired
}

export default Stats;
