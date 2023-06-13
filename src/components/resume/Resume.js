import React from "react";
import './Resume.css';
import resumePdf from "../../photos/file/BlakeReeceResume.pdf";
import photo from "../../photos/resume.png";
function Resume() {
  return (
    <section>
      <div className="center">
        <h2 className="page-header">My Resume</h2>
      </div>
      <div className="bottom-spacing">
      <img src={photo} alt="resume" className='photo1' />
        <a href={resumePdf} download>
          <h4>Download my Resume</h4>
        </a>
      </div>
    </section>
  );
}

export default Resume;
