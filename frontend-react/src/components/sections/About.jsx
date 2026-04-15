import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
  <section className="about-section">
    <div className="container text-center">

      <h2 className="section-title mb-4">About Me</h2>

      <p className="about-text">
        Hi, Im a backend-focused full stack developer. Passionate about building scalable APIs, efficient systems using Django and DRF, and Building frontend applications using react and css.
        I enjoy solving real-world problems, designing clean architectures, building unqiue applications using my skills and continuously improving my development skills.
      </p>
      <p className="about-text">
        Currently, Im looking for opportunities where I can contribute, learn, grow and prove myself as a developer.
      </p>
      <br />
      <div>
        <Link to='/certificates' className='certificates-link'>My Certificates</Link>
      </div>
    </div>
  </section>
  )
}

export default About
