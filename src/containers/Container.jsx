import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';
import Welcome from './../components/Welcome';

class Container extends Component {
  render() {
    return (
      <div>
        <Welcome />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.reducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
