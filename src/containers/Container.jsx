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

const mapStateToProps = state => ({ state: state.reducer });
const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container);
