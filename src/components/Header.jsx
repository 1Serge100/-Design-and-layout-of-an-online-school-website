import React from 'react';

function Header() {
  return (
    <div className="section">
      <h1 style={{ textAlign: 'center', fontSize: '2.5em' }}>
        Зарегистрироваться
      </h1>
      
      <div className="form-container">
        <div className="form-group">
          <label>Имя-Фамилия</label>
          <input type="text" placeholder="Иван Иванов" />
        </div>
        
        <div className="form-group">
          <label>Почта</label>
          <input type="email" placeholder="example@mail.com" />
        </div>
        
        <div className="form-group">
          <label>Телефон</label>
          <input type="tel" placeholder="+7 (XXX) XXX-XX-XX" />
        </div>
        
        <button>Зарегистрироваться</button>
      </div>
      
      <hr />
    </div>
  );
}

export default Header;