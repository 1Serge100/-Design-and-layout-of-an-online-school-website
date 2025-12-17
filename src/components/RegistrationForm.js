import React, { useState } from 'react';
import Modal from './Modal';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Открываем модальное окно');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
  };

  const handleConfirmRegistration = () => {
    console.log('Подтверждаем регистрацию:', formData);
    // Здесь будет реальная отправка данных
    setIsSuccess(true);
    
    // Очищаем форму после успешной отправки
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '' });
      handleCloseModal();
    }, 2000);
  };

  return (
    <div>
      <h1>Зарегистрироваться</h1>
      
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя-Фамилия</label>
            <input 
              id="name"
              type="text" 
              name="name"
              placeholder="Иван Иванов" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Почта</label>
            <input 
              id="email"
              type="email" 
              name="email"
              placeholder="example@mail.com" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input 
              id="phone"
              type="tel" 
              name="phone"
              placeholder="+7 (XXX) XXX-XX-XX" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn-primary">
            Зарегистрироваться
          </button>
        </form>
      </div>
      
      <hr />

      {/* Дебаг информация - можно удалить после тестирования */}
      <div style={{ 
        padding: '10px', 
        background: '#f0f0f0', 
        borderRadius: '5px', 
        marginTop: '20px',
        fontSize: '12px',
        color: '#666'
      }}>
        <strong>Отладка:</strong> isModalOpen = {isModalOpen.toString()}
      </div>
{/* Модальное окно */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title={isSuccess ? "Успех!" : "Подтверждение регистрации"}
      >
        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{
              fontSize: '50px',
              color: 'green',
              marginBottom: '20px'
            }}>✓</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '10px' }}>
              Регистрация успешна!
            </h3>
            <p>Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <div>
            <p>Проверьте введенные данные:</p>
            
            <div style={{
              background: '#F4E8D1',
              padding: '15px',
              borderRadius: '8px',
              margin: '15px 0'
            }}>
              <div style={{ marginBottom: '8px' }}>
                <strong>Имя:</strong> {formData.name || 'Не указано'}
              </div>
              <div style={{ marginBottom: '8px' }}>
                <strong>Email:</strong> {formData.email || 'Не указано'}
              </div>
              <div>
                <strong>Телефон:</strong> {formData.phone || 'Не указано'}
              </div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" required />
                <span>Согласен с условиями обработки данных</span>
              </label>
            </div>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                type="button"
                onClick={handleConfirmRegistration}
                className="btn-primary"
                style={{ flex: 1 }}
              >
                Подтвердить
              </button>
              <button 
                type="button"
                onClick={handleCloseModal}
                style={{
                  flex: 1,
                  background: '#ccc',
                  color: '#333',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                Отмена
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default RegistrationForm;