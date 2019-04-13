import React from 'react';
import ReactDOM from 'react-dom';
import { Drizzle } from 'drizzle';
import './index.css';
import Dashboard from './components/App';
import SolarCoin from './blockchain/build/contracts/SolarCoin.json'

const options = {
  contracts: [SolarCoin],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545",
    },
  },
};

const drizzle = new Drizzle(options);

ReactDOM.render(<Dashboard drizzle={drizzle} />, document.getElementById('root'));

