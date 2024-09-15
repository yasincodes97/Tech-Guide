import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

 const rootElement = document.getElementById('root');
 const root = ReactDOM.createRoot(rootElement);
 
 if(rootElement) {
  root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
  );}
  else {

  console.error("File not found");
  

 }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

