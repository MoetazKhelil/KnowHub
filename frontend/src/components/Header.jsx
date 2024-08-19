import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">Create Entry</Link>
                <Link to="/entries">All Entries</Link>
            </nav>
        </header>
    );
};

export default Header;
