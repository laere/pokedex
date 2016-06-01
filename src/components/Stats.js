import React, { Component, PropTypes } from 'react';
import shortid from 'shortid';

const Stats = ({stats}) => {
  return (
    <div>
      Stats:
      {stats.map(x => {
        return (
          <div key={shortid.generate()}>
            <a href={x.stat.url} target="_blank"><span>{x.stat.name}: {x.base_stat}</span></a>
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
