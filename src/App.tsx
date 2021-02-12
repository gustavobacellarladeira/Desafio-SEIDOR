import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './router/Router';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
};

export default App;
