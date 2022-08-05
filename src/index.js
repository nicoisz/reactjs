import React from 'react';
import ReactDOM from 'react-dom/client';
import { DataProvider } from "./context";

import { App } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataProvider><App /></DataProvider>);
