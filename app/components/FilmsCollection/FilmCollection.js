import React, { Component } from 'react';
import FilmItem from '../FilmItem';
import './FilmCollection.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

class FilmCollection extends Component { 
    render(props) {
        return (
            <div className="films">
                <div className="sort">
                    <div className="search_number_result">
                        <p>movies found</p>
                    </div>
                    <div className="sort_by">
                        <ButtonGroup label="sort by">
                            <Button type="submit" text="release date" />
                            <Button type="submit" text="rating" />            
                        </ButtonGroup>
                    </div>
                </div>
                <div className="discography">
                    {this.props.films.map(film => 
                        <FilmItem
                            id={film.id}
                            key={film.id}
                            posterUrl={film.posterUrl}
                            release_year={film.release_year}
                            show_title={film.show_title}
                            category={film.category}
                            onClick={(id) => this.props.func(id)}
                        />)
                    }    
                </div>
            </div>
        )
    }
}

export default FilmCollection