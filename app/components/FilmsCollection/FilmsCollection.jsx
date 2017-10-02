// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import FilmItem from '../FilmItem';
// import './FilmsCollection.css';
// import ButtonGroup from '../ButtonGroup';
// import Button from '../Button';

// const FilmsCollection = props => (
//   <div className="FilmsCollection">
//     <div className="sort">
//       <div className="search_number_result">
//         <p>movies found</p>
//       </div>
//       <div className="sort_by">
//         <ButtonGroup label="sort by" >
//           <Button type="submit" text="release date" />
//           <Button type="submit" text="rating" />
//         </ButtonGroup>
//       </div>
//     </div>
//     <div className="discography">
//       { Array.isArray(props.films)
//         ? props.films.map(film =>
//           (<Link to={`/film/title=${film.show_title}`} key={film.unit}>
//             <FilmItem
//               id={film.unit}
//               posterUrl={film.poster}
//               release_year={film.release_year}
//               show_title={film.show_title}
//               category={film.category}
//               director={film.director}
//               show_cast={film.show_cast}
//               summary={film.summary}
//             />
//           </Link>),
//         )
//         : <Link to={`/film/title=${props.films.show_title}`}>
//           <FilmItem
//             id={props.films.unit}
//             key={props.films.unit}
//             posterUrl={props.films.poster}
//             release_year={props.films.release_year}
//             show_title={props.films.show_title}
//             category={props.films.category}
//             director={props.films.director}
//             show_cast={props.films.show_cast}
//             summary={props.films.summary}
//             onClick={showTitle => props.func(showTitle)}
//           />
//         </Link>
//       }
//     </div>
//   </div>
// );
// FilmsCollection.propTypes = {
//   films: PropTypes.array.isRequired,
// };

// export default FilmsCollection;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FilmItem from '../FilmItem';
import './FilmsCollection.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

class FilmsCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonValue: ""
    };
  }

  handleSearchByChange = (index) => {
    console.log(`search click ${index}`);
    this.props.films.sort((a, b) => parseInt(a.release_year) - parseInt(b.release_year)); 
  }
  
  sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  render() {
    return (
      <div className="FilmsCollection">
        <div className="sort">
          <div className="search_number_result">
            <p>{this.props.films.length} movies found</p>
          </div>
          <div className="sort_by">
            <ButtonGroup label="sort by" onChange={this.handleSearchByChange}>
              <Button type="submit" text="release date" />
              <Button type="submit" text="rating" />
            </ButtonGroup>
          </div>
        </div>
        <div className="discography">
          { Array.isArray(this.props.films)
            ? this.props.films.map(film =>
              (<Link to={`/film/title=${film.show_title}`} key={film.unit}>
                <FilmItem
                  id={film.unit}
                  posterUrl={film.poster}
                  release_year={film.release_year}
                  show_title={film.show_title}
                  category={film.category}
                  director={film.director}
                  show_cast={film.show_cast}
                  summary={film.summary}
                />
              </Link>),
            )
            : <Link to={`/film/title=${this.props.films.show_title}`}>
              <FilmItem
                id={this.props.films.unit}
                key={this.props.films.unit}
                posterUrl={this.props.films.poster}
                release_year={this.props.films.release_year}
                show_title={this.props.films.show_title}
                category={this.props.films.category}
                director={this.props.films.director}
                show_cast={this.props.films.show_cast}
                summary={this.props.films.summary}
                onClick={showTitle => this.props.func(showTitle)}
              />
            </Link>
          }
        </div>
      </div>
    );
  }
}
export default FilmsCollection;

