import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CreateEntry from './pages/CreateEntry';
import EntriesList from './pages/EntriesList';
import EntryDetails from './pages/EntryDetails';
import './styles/styles.css';
import { KnowledgeProvider } from './context/KnowledgeContext';

function App() {
  return (
    <KnowledgeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateEntry />} />
            <Route path="/entries" element={<EntriesList />} />
            <Route path="/entries/:id" element={<EntryDetails />} />
          </Routes>
        </div>
      </Router>
    </KnowledgeProvider>
  );
}

export default App;