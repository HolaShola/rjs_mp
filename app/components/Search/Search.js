import React, { Component } from 'react';
import './Search.css';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';

class Search extends Component {
    render() {
        return (
            <div className="header_search_label">
                <p>Find your movie</p>
                <div className="header_search">
                    <form>
                        <input type="text" name="" defaultValue="Quentin Tarantino" />
                        <Button type="submit" text="search" />
                    </form>
                    <div className="search_filters">
                        <ButtonGroup label="search by">
                            <Button type="submit" text="title" />
                            <Button type="submit" text="director" />            
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search