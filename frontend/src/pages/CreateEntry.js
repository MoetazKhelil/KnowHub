import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import KnowledgeContext from '../context/KnowledgeContext';
import Header from '../components/Header';

const CreateEntry = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const { createEntry, error } = useContext(KnowledgeContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const entryData = { title, content, tags };
        createEntry(entryData, navigate);
    };

    return (
        <div className="create-entry">
            <Header title="Create New Knowledge Entry" />
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Tags:</label>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <button type="submit" className="create-button">Create Entry</button>
            </form>
            <footer className="footer">
                <p>KnowHub © 2024</p>
            </footer> 
        </div>
    );
};

export default CreateEntry;
