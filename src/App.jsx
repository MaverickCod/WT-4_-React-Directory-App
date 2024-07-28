import React from 'react';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AddPerson from './components/AddPerson';
import RetrieveInfo from './components/RetrieveInfo';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/">Information Directory</NavLink>
          <NavLink to="/retrieve">Retrieve Information</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<AddPerson />} />
          <Route path="/retrieve" element={<RetrieveInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;