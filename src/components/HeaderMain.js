import React from 'react';
import { Logo } from '../images';

function HeaderMain() {
  return (
    <header className="header-wrapper">
      <div className="head-main">
        

        <img src={Logo} alt="Logo" />
        <button>О Школе</button>
        <button>Курсы</button>
        <button>Преподаватели</button>
        <button>Контакты</button>
      </div>
    </header>
  );
}

export default HeaderMain;
