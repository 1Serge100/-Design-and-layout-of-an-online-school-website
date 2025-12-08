import React from 'react';
import './Header.css';

const Header = () => {
  const handleButtonClick = (buttonName) => {
    console.log(`Нажата кнопка: ${buttonName}`);
    // Здесь можно добавить логику для навигации
  };

  return (
    // Убираем внешний <header>, так как он уже есть в HTML
    <div className="header-container">
      {/* Логотип */}
      <div className="logo">
        <img 
          src="/logo.svg" 
          alt="Логотип сайта"
          className="logo-image"
        />
        <span className="logo-text">Мой Сайт</span>
      </div>

      {/* Навигация с кнопками */}
      <nav className="navigation">
        <button 
          className="nav-button"
          onClick={() => handleButtonClick('Главная')}
        >
          Главная
        </button>
        
        <button 
          className="nav-button"
          onClick={() => handleButtonClick('О нас')}
        >
          О нас
        </button>
        
        <button 
          className="nav-button"
          onClick={() => handleButtonClick('Услуги')}
        >
          Услуги
        </button>
        
        <button 
          className="nav-button"
          onClick={() => handleButtonClick('Контакты')}
        >
          Контакты
        </button>
      </nav>
    </div>
  );
};

export default Header;