import React, { useState } from 'react';
import './App.css';
import { getRate } from './clients/exchangerApi';
import { RatesHeader } from './components/RatesHeader';
import { GraphsHeader } from './components/GraphsHeader';
import { Rate } from './helpers/Rate';
import { RateCard } from './components/RateCard'
 
function App() {
  let [rates, setRates] = useState<Rate[]>([]);
  async function handleAddRate(currency: string): Promise<void> {
    const rate = {targetCurrency: currency, rateNumber: await getRate(currency)}
    setRates([...rates, rate]);
  }

  function handleDeleteRate(rate: Rate): void {
      rates.splice(rates.indexOf(rate), 1);
      setRates([...rates]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Currency exchanger</p>
      </header>
      <body className="App-body">
        <div className="currency-rates">
          <RatesHeader onAddItem={handleAddRate}/>
          <div className="rates-container">
            {rates.map((rate, i) => <RateCard rate={rate} onDelete={handleDeleteRate} key={i}/>)}
          </div>
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
