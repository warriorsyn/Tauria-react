import React from 'react';
import Navbar from './components/Navbar';
import Routes from './routes';

import './style.css';

function App() {
  return (
    <>
      <Navbar title="Pizza Builder"></Navbar>
      <Routes></Routes>
    </>
  );
}

export default App;
