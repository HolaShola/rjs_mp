import React, { Component } from 'react';
import HeaderLabel from '../HeaderLabel/HeaderLabel.js';
import Search from '../Search/Search.js';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <HeaderLabel />
                <Search />
            </div>
        )
    }
}

export default Header