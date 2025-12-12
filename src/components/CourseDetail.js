import React from 'react';
import './CourseDetail.css'; // Создайте этот файл

function CourseDetail() {
  return (
    <div className="course-detail-section">
      <div className="course-detail-container">
        
        <div className="course-detail-header">
          <h2>Курс Английского языка: B2</h2>
        </div>
        
        <div className="course-detail-content">
          <div className="course-stats">
            <div className="stat-item">
              <div className="stat-value">144</div>
              <div className="stat-label">Количество Часов</div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <div className="stat-value">120ч</div>
              <div className="stat-label">теория</div>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <div className="stat-value">24ч</div>
              <div className="stat-label">практика</div>
            </div>
          </div>
          
          <div className="course-teacher">
            <h3>Преподаватель:</h3>
            <div className="teacher-info">
              <div className="teacher-avatar">
                <img src="/OwlSkills/teacher-anna.jpg" alt="Анна Георгиевна" />
              </div>
              <div className="teacher-details">
                <div className="teacher-name">Анна Георгиевна</div>
                <div className="teacher-experience">Опыт: 10+ лет</div>
              </div>
            </div>
          </div>
          
          <div className="course-action">
            <div className="course-price">
              <div className="price-amount">60 000 ₽</div>
              <div className="price-note">за весь курс</div>
            </div>
            <button className="enroll-button">Оформить</button>
          </div>
        </div>
        
        <div className="course-goal">
          <h3>Главная цель курса:</h3>
          <p className="goal-text">
            Перевести вас от «я могу объясниться» к «я могу эффективно взаимодействовать». 
            Мы фокусируемся на уверенности, беглости и точности речи в самых разных контекстах — 
            от профессиональных до академических.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default CourseDetail;