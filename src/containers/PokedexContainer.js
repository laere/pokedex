import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetch, trackSearchValue } from '../actions/PokedexActions';
import Searchbar from '../components/Searchbar';
import Pokedex from '../components/Pokedex';

class PokedexContainer extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    getPokeData: PropTypes.func.isRequired,
    getText: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this._handleOnChange = this._handleOnChange.bind(this);
  }

  _handleOnSubmit(e) {
    e.preventDefault();
    const { text, getPokeData } = this.props;
    getPokeData(text);
  }

  _handleOnChange(e) {
    const { getText } = this.props;
    getText(e.target.value)
  }

  render() {
    const { text, data } = this.props;
    return (
      <div>
        <Searchbar onChange={this._handleOnChange}
                   onSubmit={this._handleOnSubmit}
                   text={text} />
        <Pokedex data={data} />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    data: state.pokedex.pokedexData,
    text: state.pokedex.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokeData: (pokemon) => dispatch(fetch(pokemon)),
    getText: (text) => dispatch(trackSearchValue(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);
