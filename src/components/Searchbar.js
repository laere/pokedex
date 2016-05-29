import React, { Component, PropTypes } from 'react';

const Searchbar = ({onChange, onSubmit, text}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Searchbar;
