import React, { Component } from 'react';
import FilmsCollection from './FilmsCollection';
import FilmDescription from './FilmDescription';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { film_id: 0 };
    }
    handleClick(id) {
        this.setState({ film_id: id })
    }
    films = [
        {
            id: 1,
            posterUrl: "https://netflixroulette.net/api/posters/60032563.jpg",
            release_year: "2004",
            show_title: "Kill Bill: Vol. 2",
            category: "Action & Adventure"    
        },
        {
            id: 2,
            posterUrl: "https://netflixroulette.net/api/posters/60031236.jpg",
            release_year: "2003",
            show_title: "Kill Bill: Vol. 1",
            category: "Action & Adventure"    
        },
        {
            id: 3,
            posterUrl: "https://netflixroulette.net/api/posters/880640.jpg",
            release_year: "1994",
            show_title: "Pulp Fiction",
            category: "Oscar-winning Movies"    
        },
        {
            id: 4,
            posterUrl: "https://netflixroulette.net/api/posters/60010514.jpg", 
            release_year: "1997",
            show_title: "Jackie Brown",
            category: "Dramas"    
        },
        {
            id: 5,
            posterUrl: "https://netflixroulette.net/api/posters/902003.jpg",
            release_year: "1992",
            show_title: "Reservoir Dogs",
            category: "Independent Movies"    
        },
        {
            id: 6,
            posterUrl: "https://netflixroulette.net/api/posters/520179.jpg",
            release_year: "1995",
            show_title: "Four Rooms",
            category: "Comedies"    
        }
    ];
    render() {
        let changeComponent = this.state.film_id === 0 ? <Header /> : <FilmDescription />;
        return (
            <div>
                {changeComponent}
                <FilmsCollection
                    func={(id) => this.handleClick(id)}
                    films={this.films}    
                 />
                <Footer />
            </div>
        );
    }
}

export default App