import React from 'react';
import Hero from '../components/sections/Hero';
import Skills from '../components/sections/Skills';
import Projects from './Projects';
import About from '../components/sections/About'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
