import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FilmsCollection from '../FilmsCollection';

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  render() {
    return (
      <div>
        <FilmsCollection
          films={this.props.films}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    films: state.films,
  }
}

function mapActionsToProps(dispatch) {
  return {
    handleSearchClick() {
      dispatch({
        type: 'LOAD_DATA',
      });
    }
  }
}

export default connect(mapStateToProps, mapActionsToProps)(NotFound);
