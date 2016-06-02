import React, { Component, PropTypes } from 'react';

const Searchbar = ({onChange, onSubmit, text}) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="pokedex__Searchbar" type="text" value={text} onChange={onChange}/>
        <input className="pokedex__Searchbar--button" type="submit" />
      </form>
    </div>
  );
}

export default Searchbar;
