import React from 'react';

function About() {
  return (
    <section className="section">
      <h2>OwlSkill это</h2>
      <ul className="checkbox-list">
        <li>
          <img src="/OwlSkills/humans.svg" alt="Команда" />
          <label>Команда Учителей готовая помочь.</label>
        </li>
        <li>
          <img src="/OwlSkills/desktop.svg" alt="Интерфейс" />
          <label>Понятный интерфейс.</label>
        </li>
        <li>
          <img src="/OwlSkills/book.svg" alt="Практика" />
          <label>Курсы ориентированные на практику</label>
        </li>
      </ul>
      <hr />
    </section>
  );
}



export default About;