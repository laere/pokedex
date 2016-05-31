import React, { Component, PropTypes } from 'react';

const Stats = ({stats}) => {
  return (
    <div>
      {stats.map(x => {
        return (
          <div>
            <a href={x.stat.url} target="_blank"><span>{x.stat.name}: {x.base_stat}</span></a>
          </div>
        );
      })}
    </div>
  );
}

export default Stats;
