import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PropertyDetails from './components/PropertyDetails';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/property" element={<PropertyDetails />} />
    </Routes>
  );
};

export default App;