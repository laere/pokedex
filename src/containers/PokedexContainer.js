import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class PokedexContainer extends React.Component {
  static propTypes = {

  };

  constructor() {
    super();

  }

  _handleOnSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexContainer);
