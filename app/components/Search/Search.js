import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    render() {
        return (
            <div className="header_search_label">
                <p>Find your movie</p>
                <div className="header_search">
                    <form>
                        <input type="text" name="" defaultValue="Quentin Tarantino" />
                        <input type="submit" name="" defaultValue="search" />
                    </form>
                    <div className="search_filters">
                        <p>search by</p>
                        <button>title</button>
                        <button>director</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search