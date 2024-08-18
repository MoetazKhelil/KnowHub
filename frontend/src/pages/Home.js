import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KnowledgeContext from '../context/KnowledgeContext'
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Header from '../components/Header';

const Home = () => {
    const { searchResults, searchEntries, applyFilters, setSearchResults} = useContext(KnowledgeContext);
    const[hasSearched, setHasSearched] = useState(false);
    const [activeFilters, setActiveFilters] = useState({});
    const navigate = useNavigate();

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
        setSearchResults([]);
        setHasSearched(false);
    };

    const clearSearch = () => {
        setHasSearched(false);
    };

    const handleEntryClick = (id) => {
        navigate(`/entries/${id}`);
    };

    useEffect(() => {
        return () => {
            setSearchResults([]); 
            setActiveFilters({});  
            setHasSearched(false); 
        };
    }, [setSearchResults]);

    return (
        <div className="home">
            <Header title="KnowHub" />
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
                        <li key={entry.id} onClick={() => handleEntryClick(entry.id)}>{entry.title}</li>
                    ))}
                </ul>
                )}
            </div>
            <footer className="footer">
                <p>KnowHub © 2024</p>
            </footer>  
        </div>
    )
};

export default Home;
