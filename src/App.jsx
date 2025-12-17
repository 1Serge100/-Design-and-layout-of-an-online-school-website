
import React from 'react';
import './App.css';
import HeaderMain from './components/HeaderMain';
import RegistrationForm from './components/RegistrationForm';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import GoalSection from './components/GoalSection';
import CourseDetail from './components/CourseDetail';
import TeachersSection from './components/TeachersSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <div className="content-wrapper">
        <div className="container">
          <RegistrationForm />
          <AboutSection />
          <CoursesSection />
          <GoalSection />
          <CourseDetail />
          <TeachersSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}

export default App;