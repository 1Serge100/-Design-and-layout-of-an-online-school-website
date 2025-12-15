import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <div>
          <h4>О Школе</h4>
          <a href="#about">О нас</a>
          <a href="#mission">Миссия</a>
          <a href="#values">Ценности</a>
        </div>
        
        <div>
          <h4>Курсы</h4>
          <a href="#english">Английский язык</a>
          <a href="#it">IT направления</a>
          <a href="#communication">Коммуникации</a>
        </div>
        
        <div>
          <h4>Преподаватели</h4>
          <a href="#teachers">Все преподаватели</a>
          <a href="#reviews">Отзывы</a>
          <a href="#methodology">Методика</a>
        </div>
        
        <div>
          <h4>Контакты</h4>
          <a href="#contact">Связаться с нами</a>
          <a href="#support">Поддержка</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <p style={{ margin: '10px 0', fontSize: '18px' }}>
          <strong>Телефон:</strong> +7 927-171-50-61
        </p>
        <p style={{ margin: '10px 0', fontSize: '18px' }}>
          <strong>Телефон:</strong> +7 979-127-56-19
        </p>
        <p style={{ marginTop: '20px', fontSize: '0.9em', opacity: '0.8' }}>
          © 2024 OwlSkill. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;