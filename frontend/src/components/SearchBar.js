import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleKeydown = (e) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={query}
                onChange={ e => setQuery(e.target.value)}
                onKeyDown={handleKeydown}
                placeholder='Search entries...'
            />
        </div>
    );
};

export default SearchBar;