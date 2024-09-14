import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
// Import other components

const App = () => {
  return (
    <Router>
      <Index />
    </Router>
  );
};

export default App;
