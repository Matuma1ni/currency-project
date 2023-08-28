import React from 'react';
import './App.css';
import { Autocomplete, Button, TextField } from '@mui/material';
import { currencies } from './clients/exchanger_api';
import { RatesHeader } from './components/RatesHeader';
import { GraphsHeader } from './components/GraphsHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Currency exchanger</p>
      </header>
      <body className="App-body">
        <div className="currency-rates">
          <RatesHeader />
          <div className="rates-container"></div>
        </div>
        <div className="currency-graphs">
          <GraphsHeader />
          <div className="graphs-container"></div>
        </div>
      </body>
    </div>
  );
}

export default App;
