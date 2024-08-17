import React, { createContext, useState } from 'react';
import KnowledgeService from '../services/KnowledgeService';

const KnowledgeContext = createContext();

export const KnowledgeProvider = ({ children }) => {
    const [entries, setEntries] = useState([]);
    const [filters, setFilters] = useState({});
    const [searchResults, setSearchResults] = useState([]);

    const fetchAllEntries = async () => {
        try {
            const response = await KnowledgeService.getAllEntries();
            setEntries(response.data);
        } catch (error) {
            console.error('Error fetching entries: ', error);
        }
    };

    const searchEntries = async (query) => {
        try {
            const response = await KnowledgeService.searchEntries(query);
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching entries: ', error);
        }
    };

    const applyFilters = async (filters) => {
        try {
            const response = await KnowledgeService.filterEntries(filters);
            setSearchResults(response.data);
        } catch (error) {
            console.error("Error applying filters: ", error);
        }
    };

    return (
        <KnowledgeContext.Provider value={{
            entries,
            searchResults,
            filters,
            setFilters,
            fetchAllEntries,
            searchEntries,
            applyFilters,

        }}>
            {children}
        </KnowledgeContext.Provider>
    );

};

export default KnowledgeContext;
