import React, { Component } from 'react';
import FilmsCollection from './FilmsCollection';
import FilmDescription from './FilmDescription';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    handleClick(e) {
        this.setState({ count: e })
    }
    render() {
        let com = this.state.count === 0 ? <Header /> : <FilmDescription />;
        return (
            <div>
                {com}
                <FilmsCollection func={(e) => this.handleClick(e)} />
                <Footer />
            </div>
        );
    }
}

export default App