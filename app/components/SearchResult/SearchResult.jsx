import React from 'react';
import FilmsCollection from '../FilmsCollection';

const SearchResult = props => (
  <div >
    <div>
      {props.searchQuery.match.url.replace('/search/', '')}
    </div>
    <FilmsCollection
      func={showTitle => this.handleClick(showTitle)}
      films={props.allFilms.find(film => film.director === props.searchQuery.match.url.replace('/search/', ''))}
    />
  </div>
);

export default SearchResult;
