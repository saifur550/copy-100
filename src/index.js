
import React from 'react';
import ReactDomClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';


const root = ReactDomClient.createRoot(document.getElementById('root'))


root.render(

<BrowserRouter>
<React.StrictMode>
    <App />
  </React.StrictMode>
</BrowserRouter>,
  
);
