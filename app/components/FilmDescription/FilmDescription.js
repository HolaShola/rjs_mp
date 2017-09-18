import React, { Component } from 'react';
import './FilmDescription.css';

class FilmDescription extends Component {
    render(props) {
        return (
            <div className="header">
                <div className="header_label">
                    <div className="header_label_up">
                        <p>nextflixroulette</p>
                        <button>search</button>	
                    </div>	
                    <div className="header_down">
                        <div className="header_img">
                            <img src="https://netflixroulette.net/api/posters/880640.jpg" />
                        </div>
                        <div className="header_img_description">
                            <div className="show_title">
                                <p>Pulp Fiction</p>
                            </div>
                            <div className="film_rating">4.1</div>
                            <div>
                                <p className="category">Oscar-winning</p>
                            </div>
                            <div>
                                <p className="release_year film_duration">1994 154 min</p>
                            </div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Exc.</div>
                            <div className="director_cast_list">
                                <p>Director: Quentin Tarantino</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid
                                    consectetur cum dolore eligendi illo nisi perspiciatis quibusdam
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>    
        )
    }
}

export default FilmDescription