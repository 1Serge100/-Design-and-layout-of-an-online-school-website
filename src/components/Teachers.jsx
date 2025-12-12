import React from 'react';
function Teachers() {
  const teachers = [
    {
      name: "Алексей Владиславович",
      experience: "Стаж: 7 лет",
      direction: "Направление IT",
      specialization: "Разработка и Высшее серверное данное"
    },
    {
      name: "Анна Георгиевна",
      experience: "Стаж: 10 лет",
      direction: "Направление Иностранное имени",
      specialization: "Английский язык"
    }
  ];

  return (
    <section className="section">
      <h2>Преподавательский состав</h2>
      
      <div className="teachers-grid">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">
            <h4>{teacher.name}</h4>
            <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>{teacher.experience}</p>
            <p><strong>{teacher.direction}</strong></p>
            <p>{teacher.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teachers;