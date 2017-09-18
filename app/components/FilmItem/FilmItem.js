import React, { Component } from 'react';
import './FilmItem.css';

class FilmItem extends Component {
    render() {
        return (
            <div className="one_film" onClick={() => this.props.onClick(this.props.id)} >
                <div>
                    <img src={this.props.posterUrl} width="320" height="450" />
                </div>
                <div className="film_description">
                    <div className="release_year">
                        <p>{this.props.release_year}</p>
                    </div>
                    <div className="show_title">
                        <p>{this.props.show_title}</p>
                    </div>
                    <div className="category">
                        <p>{this.props.category}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilmItem