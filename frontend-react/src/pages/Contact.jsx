import React from 'react';

function Contact() {
  return (
    <section className="contact-section">
      
      <div className="container text-center">

        <h2 className="section-title mb-4">Contact Me</h2>

        <p className="contact-text">
          your info will never be shared with anyone.<br />
          Feel free to reach out for any opportunities or collaboration :)
        </p>

        <div className="contact-links">

          <div className="contact-row">
            <a href="mailto:spoorjith1@gmail.com" target="_blank" className="social-link"><i className="fas fa-envelope"></i> Email</a>
            <a href="https://github.com/spoorjith1" target="_blank" className="social-link"><i className="fab fa-github"></i> GitHub</a>
          </div>

          <div className="contact-row">
            <a href="https://www.linkedin.com/in/spoorjith-malebalu-3545763b0/" target="_blank" className="social-link">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobseeker-profile--profile-one-frontend" target="_blank" className="social-link">
              <i className="fas fa-briefcase"></i> Indeed
            </a>
            <a href="#" target="_blank" className="social-link">
              <i className="fas fa-user-tie"></i> Naukri
            </a>
          </div>

          <div className="contact-row">
            <a href="https://www.instagram.com/spoorjith/" target="_blank" className="social-link"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61586036255799" target="_blank" className="social-link">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;