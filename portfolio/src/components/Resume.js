import React from "react";
import resumePdf from "../photos/resume file/BlakeReeceResume.pdf";

function Resume() {
  return (
    <section>
      <div className="center">
        <h2 className="page-header">My Resume</h2>
      </div>
      <div className="bottom-spacing">
        <a href={resumePdf} download>
          <h4>Download my Resume</h4>
        </a>
      </div>
    </section>
  );
}

export default Resume;
