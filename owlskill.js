import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';

// Находим существующий HTML элемент
const headerElement = document.getElementById('main');

// Если элемент найден, монтируем React в него
if (headerElement) {
  const root = ReactDOM.createRoot(headerElement);
  root.render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  );
}