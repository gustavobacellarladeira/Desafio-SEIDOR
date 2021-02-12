import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import Routes from './router/Router';
import NavBar from './components/NavBar/NavBar';
import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
