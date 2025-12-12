import React from 'react';

function Courses() {
  return (
    <section className="section">
      <h2>Наши Курсы</h2>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        В основе наших курсов — проверенные методики, практические задания и поддержка коммерческих, 
        которые помогут вам не просто узнать новое, а сразу применить это в жизни, работе или творчестве.
      </p>
      
      <div className="courses-grid">
        <div className="course-card">
          <h3>Курс Английского языка: B2</h3>
          <div className="course-info">
            <span>Часы:</span>
            <span>154</span>
          </div>
          <p>Преподаватель: Анна Георгиевна</p>
          <button>записаться</button>
        </div>
        
        <div className="course-card-2">
          <h3>Курс Програмирования на Python</h3>
          <div className="course-info">
            <span>Часы:</span>
            <span>200</span>
          </div>
          <p>Преподаватель: Николай Андреевич</p>
          <button>записаться</button>
        </div>
        
        <div className="course-card-3">
          <h3>Курс Програмирования на SQL</h3>
          <div className="course-info">
            <span>Часы:</span>
            <span>75</span>
          </div>
          <div className="course-info">
            <span>Преподаватель:</span>
            <span>Алексей Владиславович</span>
          </div>
          <button>записаться</button>
        </div>
      </div>
    </section>
  );
}

export default Courses;