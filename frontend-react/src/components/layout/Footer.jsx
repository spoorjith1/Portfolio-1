import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">

        <h5 className="footer-name">Spoorjith Malebalu</h5>
        <p className="footer-text">
          Fullstack Developer | Django, DRF & React.js
        </p>

        <div className="footer-links">
          <a href="https://github.com/yourusername" target="_blank"><i className='fab fa-github'></i> GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank"><i className='fab fa-linkedin'></i> LinkedIn</a>
        </div>

        <p className="footer-copy">
          © 2026 Spoorjith. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;