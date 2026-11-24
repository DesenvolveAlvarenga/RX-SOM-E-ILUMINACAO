import React from 'react';
import { createRoot } from 'react-dom/client';
// O CSS global precisa vir ANTES dos componentes: assim as regras de cada
// seção (ex.: esconder botões no mobile) têm prioridade sobre as regras gerais.
import './styles/global.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
