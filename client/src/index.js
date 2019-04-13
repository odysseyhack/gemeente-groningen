import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Drizzle, generateStore } from "drizzle";
import { DrizzleContext } from "drizzle-react";
import SolarCoin from "./blockchain/build/contracts/SolarCoin.json";

const options = { contracts: [SolarCoin] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

ReactDOM.render(<DrizzleContext.Provider drizzle={drizzle}><App /></DrizzleContext.Provider>, document.getElementById('root'));


