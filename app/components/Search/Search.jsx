import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Search.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import { getFilms, changeTypeOfSearch } from '../../actions'

class Search extends Component {
  constructor(props) {
    super(props);
     this.state = {
      searchValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  handleSearchByChange = (index) => {
    const { dispatch } = this.props;
    const buttonValue = index === 0 ? 'title' : 'director';
    dispatch(changeTypeOfSearch(buttonValue));
  }
  
  handleSearchClick = () => {
    const { dispatch } = this.props;
    dispatch(getFilms(this.state.searchValue));
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
          <Link to={`/search/${this.props.buttonValueForSearch}=${this.state.searchValue}`}><Button
            type="submit"
            text="search"
            onClick={this.handleSearchClick}
          /></Link>
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

function mapStateToProps(state) {
  return {
    buttonValueForSearch: state.buttonValueForSearch,
  }
}

// function mapActionsToProps(dispatch) {
//   return {
    
//   }
// }

export default connect(mapStateToProps)(Search);
