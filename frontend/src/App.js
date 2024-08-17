import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import CreateEntry from './pages/CreateEntry';
import EntriesList from './pages/EntriesList';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateEntry />} />
          <Route path="/entries" element={<EntriesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;