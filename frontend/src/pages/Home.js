import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import KnowledgeContext from '../context/KnowledgeContext'
import SearchBar from '../components/SearchBar';

const Home = () => {
    const { searchResults, searchEntries, applyFilters } = useContext(KnowledgeContext);
    const[hasSearched, setHasSearched] = useState(false);

    const handleSearch = (query) => {
        searchEntries(query);
        setHasSearched(true);
    };
    //ToDo add handleFilter

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
            <SearchBar onSearch={handleSearch} />
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
