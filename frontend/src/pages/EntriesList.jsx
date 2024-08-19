import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import KnowledgeContext from '../context/KnowledgeContext';
import Header from '../components/Header';

const EntriesList = () => {
    const { entries, fetchAllEntries } = useContext(KnowledgeContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllEntries();
    }, []);

    const handleEntryClick = (id) => {
        navigate(`/entries/${id}`);
    };

    return (
        <div className="entries-list">
            <Header title="All Knowledge Entries" />
            <ul>
                {entries.map(entry => (
                    <li key={entry.id} onClick={() => handleEntryClick(entry.id)}>
                        {entry.title}
                    </li>
                ))}
            </ul>
            <hr />
            <footer className="footer">
                <p>KnowHub © 2024</p>
            </footer> 
        </div>
        
    );
}

export default EntriesList;