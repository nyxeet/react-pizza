import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../views/Home';
import Header from './Header/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
