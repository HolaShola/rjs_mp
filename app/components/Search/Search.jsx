import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Search.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import { getFilms, getFilms2 } from '../../actions'

class Search extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSearchByChange = this.handleSearchByChange.bind(this);
     this.state = {
      searchValue: '',
      buttonValue: 'title',
    };
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  // handleSearchByChange(index) {
  //   const buttonValue = index === 0 ? 'title' : 'director';
  //   this.setState({ buttonValue });
  // }
  
  handleSearchClick = () => {
    const { dispatch } = this.props;
    dispatch(getFilms(this.state.searchValue));
  }

  handleSearchClick2 = () => {
    const { dispatch } = this.props;
    dispatch(getFilms2(this.state.searchValue));
  }

  render() {
    return (
      <div className="header_search_label">
        <p>Find your movie</p>
        <div className="header_search">
          <input
            type="text"
            name=""
            defaultValue=""
            onChange={this.handleChange}
            ref={(input) => { this.input = input; }}
          />
          <Link to={`/search/${this.state.buttonValue}=${this.state.searchValue}`}><Button
            type="submit"
            text="search"
            onClick={this.handleSearchClick}
          /></Link>
          <button
            onClick={this.handleSearchClick2}
          >fetch</button>
          <div className="search_filters">
            <ButtonGroup label="search by" onChange={this.handleSearchByChange}>
              <Button type="raised" text="title" />
              <Button type="raised" text="director" />
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     users: state.users,
//   }
// }

// function mapActionsToProps(dispatch) {
//   return {
    
//   }
// }

export default connect()(Search);
