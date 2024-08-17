import axios from 'axios';

const API_URL = 'http://localhost:8000/knowledge/';

const getAllEntries = async () => { 
    return await axios.get(`${API_URL}all/`);
};

const getEntryById = async (id) => { 
    return await axios.get(`${API_URL}${id}/`);
};

const createEntry = async (data) => { 
    return await axios.post(`${API_URL}create/`, data);
};

const updateEntry = async (id, data) => { 
    return await axios.put(`${API_URL}${id}/update/`, data);
};

const deleteEntry = async (id) => { 
    return await axios.delete(`${API_URL}${id}/delete/`);
};

const searchEntries = async (query) => {
    return await axios.get(`${API_URL}search/?query=${query}`);
};

const filterEntries = async (filters) => {
    return await axios.get(`${API_URL}filter/`, { params: filters });
};


export default {
    getAllEntries,
    getEntryById,
    createEntry,
    updateEntry,
    deleteEntry,
    searchEntries,
    filterEntries
};