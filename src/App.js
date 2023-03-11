import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';

export default function App() {
  return (
    <Router>
        <NavTabs />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}