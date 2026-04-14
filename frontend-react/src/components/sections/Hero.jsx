import React from 'react'

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="hero-title">Hi, I'm Spoorjith Malebalu</h1>
            <h4 className="hero-subtitle">
              Backend-Focused FullStack Developer | Python Django, DRF, & React.js
            </h4>
            <p className="hero-text">
              I build scalable backend systems, APIs, and full-stack applications.
            </p>

            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
              <a href="/projects" className="btn btn-orange">
                View Projects
              </a>
              <a href="/contact" className="btn btn-outline-light">
                <i className='fas fa-envelope'></i> Contact Me
              </a>
            </div>
          </div>

          {/* Right Side (Photo) */}
          <div className="col-md-6 text-center">
            <img
              src="profile.jpg"
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