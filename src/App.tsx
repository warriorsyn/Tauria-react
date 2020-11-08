import React from 'react';
import Navbar from './components/Navbar';

import Compose from './helpers/compose.helper';

import CrustProvider from './context/crust.context';
import IngredientsProvider from './context/ingredients.context';
import SizeProvider from './context/Size.context';

import Routes from './routes';

import './style.css';

function App() {
  return (
    <>
      <Compose components={[SizeProvider,CrustProvider, IngredientsProvider]}>
        <Navbar title="Pizza Builder"></Navbar>
        <Routes></Routes>
      </Compose>
    </>
  );
}

export default App;
