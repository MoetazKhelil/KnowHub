import React, { createContext, useState, useEffect } from 'react';
import KnowledgeService from '../services/KnowledgeService';

const KnowledgeContext = createContext();

export const KnowledgeProvider = ({ children }) => {
    const [entries, setEntries] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [entryDetails, setEntryDetails] = useState(null);
    const [error, setError] = useState(null);



    const fetchAllEntries = async () => {
        try {
            const response = await KnowledgeService.getAllEntries();
            setEntries(response.data);
        } catch (error) {
            console.error('Error fetching entries:', error);
            setError('Failed to fetch entries.');
        }
    };

    const fetchEntryById = async (id) => {
        try {
            const response = await KnowledgeService.getEntryById(id);
            setEntryDetails(response.data);
        } catch (error) {
            console.error('Error fetching entry:', error);
            setError('Failed to fetch entry.');
        }
    };

    const createEntry = async (data, navigate) => {
        try {
            await KnowledgeService.createEntry(data);
            fetchAllEntries();
            navigate('/entries');
        } catch (error) {
            console.error('Error creating entry:', error);
            setError('Failed to create entry. Please try again.');
        }
    };

    const updateEntry = async (id, data, navigate) => {
        try {
            await KnowledgeService.updateEntry(id, data);
            fetchAllEntries();
            navigate(`/entries/${id}`);
        } catch (error) {
            console.error('Error updating entry:', error);
            setError('Failed to update entry. Please try again.');
        }
    };

    const deleteEntry = async (id, navigate) => {
        try {
            await KnowledgeService.deleteEntry(id);
            fetchAllEntries();
            navigate('/entries');
        } catch (error) {
            console.error('Error deleting entry:', error);
            setError('Failed to delete entry.');
        }
    };

    const searchEntries = async (query) => {
        try {
            const response = await KnowledgeService.searchEntries(query);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching entries:', error);
            setError('Failed to search entries.');
        }
    };

    const applyFilters = async (filters) => {
        try {
            const response = await KnowledgeService.filterEntries(filters);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error applying filters:', error);
            setError('Failed to apply filters.');
        }
    };

    return (
        <KnowledgeContext.Provider value={{
            entries,
            searchResults,
            entryDetails,
            error,
            fetchAllEntries,
            fetchEntryById,
            createEntry,
            updateEntry,
            deleteEntry,
            searchEntries,
            applyFilters,
            setSearchResults,
        }}>
            {children}
        </KnowledgeContext.Provider>
    );
};

export default KnowledgeContext;
