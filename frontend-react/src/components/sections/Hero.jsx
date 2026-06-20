import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="hero-title">Hi, I'm <span className='hero-title-name'>Spoorjith Malebalu</span></h1>
            <h4 className="hero-subtitle">
              Backend-Focused FullStack Developer | Python, Django, Django REST Framework & React.js
            </h4>
            <p className="hero-text">
              I build scalable backend systems, REST APIs and full-stack applications.
            </p>
            <a href="mailto:spoorjith1@gmail.com" target="_blank" className='hero-mail'>spoorjith1@gmail.com</a><br />

            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
              <Link to="/projects" className="btn btn-orange heros-btn">
                View Projects
              </Link>
              <Link to="/contact" className="btn btn-outline-light heros-btn">
                <i className='fas fa-envelope'></i> Contact Me
              </Link>
              <Link to="/resume" className='btn btn-outline-light heros-btn'>
                Resume
              </Link>
            </div>
          </div>

          {/* Right Side (Photo) */}
          <div className="col-md-6 text-center">
            <img
              src="profile.png"
              alt="profile"
              className="hero-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;