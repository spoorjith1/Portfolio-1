import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Certificates from './pages/Certificates';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/certificates' element={<Certificates />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
