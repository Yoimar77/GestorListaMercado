import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/index.css';

// Importar Material Icons (necesitarás agregar esto a tu index.html o instalarlo como paquete npm)
// Para este ejemplo, asumimos que se añadirá el enlace de CDN en el index.html

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);