import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">

        <img src='/favicon.png' width={26} />
        <h5 className="footer-name d-inline">&nbsp; Spoorjith Malebalu</h5>
        <p className="footer-text">
          Fullstack Developer | Django, DRF & React.js
        </p>

        <div className="footer-links">
          <a href="https://github.com/spoorjith1" target="_blank"><i className='fab fa-github'></i> GitHub</a>
          <a href="https://www.linkedin.com/in/spoorjith-malebalu-3545763b0/" target="_blank"><i className='fab fa-linkedin'></i> LinkedIn</a>
        </div>

        <p className="footer-copy">
          © 2026 Spoorjith. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;