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
            category: "Action & Adventure",
            rating: "3.8",
            runtime: "137 min"    
        },
        {
            id: 2,
            posterUrl: "https://netflixroulette.net/api/posters/60031236.jpg",
            release_year: "2003",
            show_title: "Kill Bill: Vol. 1",
            category: "Action & Adventure",
            rating: "3.8",
            runtime: "111 min",
        },
        {
            id: 3,
            posterUrl: "https://netflixroulette.net/api/posters/880640.jpg",
            release_year: "1994",
            show_title: "Pulp Fiction",
            category: "Oscar-winning Movies",
            rating: "4.1",
            runtime: "154 min" ,
            show_cast: `John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel,
                        Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros`,
            director: "Quentin Tarantino",
            summary: `Weaving together three stories featuring a burger-loving hit man, his
                      philosophical partner and a washed-up boxer, Quentin Tarantino influenced
                      a generation of filmmakers with this crime caper's stylized, over-the-top
                      violence and dark comic spirit.`,   
        },
        {
            id: 4,
            posterUrl: "https://netflixroulette.net/api/posters/60010514.jpg", 
            release_year: "1997",
            show_title: "Jackie Brown",
            category: "Dramas",
            rating: "3.7",
            runtime: "154 min"    
        },
        {
            id: 5,
            posterUrl: "https://netflixroulette.net/api/posters/902003.jpg",
            release_year: "1992",
            show_title: "Reservoir Dogs",
            category: "Independent Movies",
            rating: "4.0",
            runtime: "99 min"    
        },
        {
            id: 6,
            posterUrl: "https://netflixroulette.net/api/posters/520179.jpg",
            release_year: "1995",
            show_title: "Four Rooms",
            category: "Comedies",
            rating: "3.6",
            runtime: "98 min"    
        }
    ];
    render() {
        let changeComponent = this.state.film_id === 0 ? <Header /> : <FilmDescription
                                                                          posterUrl={this.films[2].posterUrl}
                                                                          show_title={this.films[2].show_title}       
                                                                          category={this.films[2].category}
                                                                          release_year={this.films[2].release_year}
                                                                          rating={this.films[2].rating}
                                                                          runtime={this.films[2].runtime}
                                                                          show_cast={this.films[2].show_cast}
                                                                          director={this.films[2].director}
                                                                          summary={this.films[2].summary}
                                                                      />;
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