import React from 'react';

function Resume() {
  return (
    <div className='resume-page'>
      <h2 className='resume-heading'>Resume</h2>
      <div className='resume-container'>
        <div className='pdf-options'>
          <div className='options-container'>
            <a href='/spoorjith_resume4.pdf' target='_blank' rel='noopener noreferrer' className='btn resume-download-btn'>View Resume PDF</a>
            <a href='/spoorjith_resume4.pdf' download='spoorjith_resume.pdf' className='btn resume-download-btn'>Download Resume PDF</a>
          </div>
        </div>
        <div>
          <img src='/resume2.jpg' alt='resume-preview' className='resume-screenshot' />
        </div>
      </div>
    </div>
  )
}

export default Resume
