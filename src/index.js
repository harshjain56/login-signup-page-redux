import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import IdProvider from './Context/IdProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IdProvider>

<BrowserRouter>
  <App />
 </BrowserRouter>

  </IdProvider>
 
   
  
);

