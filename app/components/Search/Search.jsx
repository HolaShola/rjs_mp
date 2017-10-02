import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchValue: "Quentin Tarantino",
      buttonValue: "director"
    };
  }

  handleChange(event) {
    this.setState({searchValue: event.target.value});
  }

  handleSearchClick = () => {
  //  console.log(this.input.value)
  //  this.setState = (state => ({searchValue: this.input.value}));
  };

  handleSearchByChange = (index) => {
    console.log(`search click ${index}`);
    let buttonValue = index == 0 ? "title" : "director";
    this.setState({buttonValue: buttonValue});
  }

  render() {
    return (
      <div className="header_search_label">
        <p>Find your movie</p>
        <div className="header_search">
          <input
            type="text"
            name=""
            defaultValue={this.state.searchValue}
            onChange={this.handleChange}
            ref={(input) => { this.input = input; }}
          />
          <Link to={`/search/${this.state.buttonValue}=${this.state.searchValue}`}><Button
            type="submit"
            text="search"
            onClick={this.handleSearchClick}
          /></Link>
          <div className="search_filters">
            <ButtonGroup label="search by" onChange={this.handleSearchByChange}>
              <Button type="submit" text="title" />
              <Button type="submit" text="director" />
            </ButtonGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
