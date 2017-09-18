import React, { Component } from 'react';
import './FilmDescription.css';
import AppTitle from '../AppTitle';
import Button from '../Button';

class FilmDescription extends Component {
    render(props) {
        return (
            <div className="header">
                <div className="header_label">
                    <div className="header_label_up">
                        <AppTitle />
                        <Button type="submit" text="search" />
                    </div>	
                    <div className="header_down">
                        <div className="header_img">
                            <img src={this.props.posterUrl} />
                        </div>
                        <div className="header_img_description">
                            <div className="show_title">
                                <p>{this.props.show_title}</p>
                            </div>
                            <div className="film_rating">{this.props.rating}</div>
                            <div>
                                <p className="category">{this.props.category}</p>
                            </div>
                            <div>
                                <p className="release_year film_runtime">{this.props.release_year}       {this.props.runtime}</p>
                            </div>
                            <div className="description">
                                {this.props.summary}
                            </div>
                            <div className="director_cast_list">
                                <p>{this.props.director}</p>
                                <p>{this.props.show_cast}</p>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>    
        )
    }
}

export default FilmDescription