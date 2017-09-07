import React, { Component } from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import FilmsCollection from './FilmsCollection/FilmCollection';
import Footer from './Footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <FilmsCollection />
                <Footer />
            </div>
        );
    }
}

export default App