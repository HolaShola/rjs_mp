import React, { Component } from 'react';
import './Search.css';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';

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
                        <ButtonGroup button_label="search by">
                            <Button button_type="submit" button_text="title" />
                            <Button button_type="submit" button_text="director" />            
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search