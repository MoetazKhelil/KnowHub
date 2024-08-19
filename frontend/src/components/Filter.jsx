import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [author, setAuthor] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate ] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const handleFilter = () => {
        const filters = {
            title,
            tags,
            author,
            startDate,
            endDate,
        };
        onFilter(filters);
    };

    const handleKeydown = (e) => {
        if (e.key === 'Enter') {
            handleFilter();
        }
    };

    return (
        <div className="filter">
            <button onClick={() => setShowFilters(!showFilters)} className="filter-toggle-button">
                Filter &#9660;
            </button>
            {showFilters && (
                <div className="filter-container">
                    <div className="filter-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onKeyDown={handleKeydown}
                            placeholder='Enter title'
                        />
                    </div>

                    <div className="filter-group">
                        <label>Tags:</label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            onKeyDown={handleKeydown}
                            placeholder="Enter tags"
                        />
                    </div>
                    <div className="filter-group">
                        <label>From Date:</label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            onKeyDown={handleKeydown}
                        />
                    </div>
                    <div className="filter-group">
                        <label>To Date:</label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            onKeyDown={handleKeydown}
                        />
                    </div>
                    <button onClick={handleFilter} className="apply-filters-button">Apply Filters</button>
                </div>
            )}
        </div>
    );
};

export default Filter;