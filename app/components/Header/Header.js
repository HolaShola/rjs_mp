import React, { Component } from 'react';
import HeaderLabel from '../HeaderLabel';
import Search from '../Search';
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