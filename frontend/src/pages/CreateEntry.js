// CreateEntry.js

import React, { useState } from 'react';
import KnowledgeService from '../services/KnowledgeService';
import { useNavigate } from 'react-router-dom';

const CreateEntry = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const entryData = { title, content, tags };
        try {
            await KnowledgeService.createEntry(entryData);
            navigate('/entries'); 
        } catch (err) {
            setError('Failed to create entry. Please try again.');
        }
    };

    return (
        <div className="create-entry">
            <h2>Create New Knowledge Entry</h2>
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
        </div>
    );
};

export default CreateEntry;
