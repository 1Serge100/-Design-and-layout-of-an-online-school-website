import React from 'react';
import './App.css';
import HeaderMain from './components/HeaderMain';
import Header from './components/Header';
import About from './components/About';
import Courses from './components/Courses';
import Goal from './components/Goal';
import CourseDetail from './components/CourseDetail'; // Добавьте эту строку
import Teachers from './components/Teachers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <div className="content-wrapper">
        <div className="container">
          <Header />
          <About />
          <Courses />
          <Goal />
          <CourseDetail /> 
          <Teachers />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;