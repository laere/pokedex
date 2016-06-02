import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPokemonData, trackSearchValue } from '../actions/PokedexActions';
import { fetchEvolutionData } from '../actions/EvolutionActions';
import Searchbar from '../components/Searchbar';
import Pokedex from '../components/Pokedex';

class PokedexContainer extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    getPokeData: PropTypes.func.isRequired,
    getText: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this._handleOnSubmit = this._handleOnSubmit.bind(this);
    this._handleOnChange = this._handleOnChange.bind(this);
    // this._handleEvolutionClick = this._handleEvolutionClick.bind(this);
  }

  _handleOnSubmit(e) {
    e.preventDefault();
    const { text, getPokeData } = this.props;
    getPokeData(`http://pokeapi.co/api/v2/pokemon/${text}/`);
  }

  _handleOnChange(e) {
    const { getText } = this.props;
    getText(e.target.value)
  }

  // _handleEvolutionClick(e, id) {
  //   const { getEvolutionData } = this.props;
  //   getEvolutionData(`http://pokeapi.co/api/v2/evolution-chain/${id}/`)
  // }

  render() {
    const { text, data, evolution } = this.props;
    console.log(evolution);
    return (
      <div className="pokedex__Wrapper">
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
    data: state.pokedex.pokemon,
    text: state.pokedex.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokeData: (url) => dispatch(fetchPokemonData(url)),
    // getEvolutionData: (url) => dispatch(fetchEvolutionData(url)),
    getText: (text) => dispatch(trackSearchValue(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);
