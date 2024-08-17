import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import KnowledgeContext from '../context/KnowledgeContext'
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';


const Home = () => {
    const { searchResults, searchEntries, applyFilters } = useContext(KnowledgeContext);
    const[hasSearched, setHasSearched] = useState(false);
    const [activeFilters, setActiveFilters] = useState({});

    const handleSearch = (query) => {
        if (query.trim() === '') {
            setHasSearched(false);
        } else {
            searchEntries(query);
            setHasSearched(true);
        }
    };

    const handleFilter = (filters) => {
        setActiveFilters(filters);
        applyFilters(filters);
        setHasSearched(true);
    };

    const clearFilters = () => {
        setActiveFilters({});
        applyFilters({});
        setHasSearched(false);
    };

    const clearSearch = () => {
        setHasSearched(false);
    };

    return (
        <div className="home">
            <header>
                <h1>KnowHub</h1>
                <nav>
                    <Link to="/create">Create Entry</Link>
                    <Link to="/entries">All Entries</Link>
                </nav>
            </header>
            <section className="description">
                <p>Welcome to KnowHub, your knowledge management platform. Use the search bar below to find knowledge entries or apply filters to narrow down the list.</p>
            </section>
            <SearchBar onSearch={handleSearch} onClear={clearSearch} />
            <Filter onFilter={handleFilter} />
            <div className='active-filters'>
                {Object.keys(activeFilters).length > 0 && (
                    <div>
                        <h3>Active Filters: </h3>
                        <ul>
                        {Object.keys(activeFilters).map(key => (
                                activeFilters[key] && (
                                    <li key={key}>
                                        <strong>{key}:</strong> {activeFilters[key]}
                                    </li>
                                )
                            ))}
                        </ul>
                        <button onClick={clearFilters}>Clear Filters</button>
                    </div>
                )}
            </div>
            <div className="results">
                {hasSearched && searchResults.length === 0 ? (
                    <p>No results found</p>
                ) : (
                    <ul>
                    {searchResults.map((entry) => (
                        <li key={entry.id}>{entry.title}</li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    )
};

export default Home;
