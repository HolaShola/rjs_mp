import React, { Component } from 'react';
import './FilmItem.css';

class FilmItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="one_film">
                <div>
                    <img src={this.props.src} width="320" height="450" />
                </div>
                <div className="film_description">
                    <div className="release_year">
                        <p>2004</p>
                    </div>
                    <div className="show_title">
                        <p>Kill Bill: Vol. 2</p>
                    </div>
                    <div className="category">
                        <p>Action & Adventure</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilmItem