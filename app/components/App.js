import React, { Component } from 'react';
import Header from './Header/Header';
import FilmsCollection from './FilmsCollection/FilmCollection';
import Footer from './Footer/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <FilmsCollection />
                <Footer />
            </div>
        );
    }
}

export default App