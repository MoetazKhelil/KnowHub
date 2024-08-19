import React, { useEffect, useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import KnowledgeContext from '../context/KnowledgeContext';
import Header from '../components/Header';

const EntryDetails = () => {
    const { id } = useParams();
    const { entryDetails, fetchEntryById, deleteEntry, error } = useContext(KnowledgeContext);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEntryById(id);
    }, [id, fetchEntryById]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!entryDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div className="entry-details">
            <Header title={entryDetails.title} />
            <div className="entry-content">
                <p>{entryDetails.content}</p>
                <p><strong>Tags:</strong> {entryDetails.tags}</p>
                <p><strong>Created At:</strong> {new Date(entryDetails.created_at).toLocaleDateString()}</p>
            </div>
            <button className="delete-button" onClick={() => deleteEntry(id, navigate)}>Delete</button>
        </div>
    );
};

export default EntryDetails;
