import React, { Component } from 'react';
import FilmItem from '../FilmItem/FilmItem';
import './FilmCollection.css';

class FilmCollection extends Component {
    render() {
        return (
            <div className="films">
                <div className="sort">
                    <div className="search_number_result">
                        <p>movies found</p>
                    </div>
                    <div className="sort_by">
                        <p>Sort by</p>
                        <button>release date</button>
                        <button>rating</button>
                    </div>
                </div>
                <div className="discography">
                    <FilmItem src={"https://netflixroulette.net/api/posters/60032563.jpg"} />
                    <FilmItem src={"https://netflixroulette.net/api/posters/60031236.jpg"} />
                    <FilmItem src={"https://netflixroulette.net/api/posters/880640.jpg"} />
                    <FilmItem src={"https://netflixroulette.net/api/posters/60010514.jpg"} />
                    <FilmItem src={"https://netflixroulette.net/api/posters/902003.jpg"} />
                    <FilmItem src={"https://netflixroulette.net/api/posters/520179.jpg"} />
                </div>
            </div>
        )
    }
}

export default FilmCollection