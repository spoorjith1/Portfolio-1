import React from 'react'

function Skills() {
  return (
    <section className="skills-section">
      <div className="container">

        <h2 className="section-title text-center mb-5">Skills</h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="skill-card">
              <h4>Frontend</h4>
              <div className="skills-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Bootstrap</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="skill-card">
              <h4>Backend</h4>
              <div className="skills-list">
                <span>Python</span>
                <span>Django</span>
                <span>DRF</span>
                <span>REST APIs</span>
                <span>Flask (Basics)</span>
                <span>Numpy, pandas, matlpotlib (Basics)</span>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="skill-card">
              <h4>DataBase & Tools</h4>
              <div className="skills-list">
                <span>SQL</span>
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>Postman</span>
                <span>VS Code</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
