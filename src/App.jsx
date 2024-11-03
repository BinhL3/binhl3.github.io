import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import React, { useState, useEffect } from "react";

// add drop down somehow
function App() {
  return (
    <div className="main-container">
      <Header></Header>
      <img className="header-image" src="assets/nycsubway.jpg"></img>
      <p>
        Actively looking for SWE new grad and internship opportunities!
        Interested in back-end development, machine learning, and content
        creation.
      </p>
      <hr style={{ border: "none", height: "1px", backgroundColor: "black" }} />
      <div className="experience" style={{ marginBottom: "1.75em" }}>
        <img src="assets/drexel.png" alt="Drexel" />
        <div>
          <h2>
            Drexel University <span className="time">9/2025</span>
          </h2>
          <p>Bachelor of Science in Computer Science</p>
        </div>
      </div>
      <div className="experience">
        <img src="assets/stealth.jpeg" alt="Hire Me" />
        <div>
          <h2>
            <a
              href="https://www.linkedin.com/in/binhlee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Add Your Company Here :)
            </a>
            <span className="time"> 1/2025 — 9/2025</span>{" "}
          </h2>
          <p>Software Engineer</p>
        </div>
      </div>
      <div className="experience">
        <img src="assets/google.png" alt="Google" />
        <div>
          <h2>
            Google <span className="time"> 6/2024 — 9/2024</span>{" "}
          </h2>
          <p>Software Engineer Fellow</p>
        </div>
      </div>
      <div className="experience">
        <img src="assets/dataing.jpg" alt="Dataing" />
        <div>
          <h2>
            Dataing <span className="time"> 4/2024 — 9/2024</span>
          </h2>
          <p>Software Engineer Intern</p>
        </div>
      </div>
      <div className="experience">
        <img src="assets/cci.png" alt="Drexel CCI" />
        <div>
          <h2>
            Drexel University <span className="time"> 9/2024 —</span>
          </h2>
          <p>Teaching Assistant</p>
        </div>
      </div>
      <div className="experience">
        <img src="assets/soar.jpg" alt="SOAR Lab" />
        <div>
          <h2>
            SOAR Lab <span className="time"> 3/2024 — 10/2024</span>
          </h2>
          <p>Research Engineer</p>
        </div>
      </div>
      <div className="experience">
        <img src="assets/stanford.webp" alt="Stanford University" />
        <div>
          <h2>
            Stanford University <span className="time"> 4/2024 — 6/2024</span>
          </h2>
          <p>Section Leader</p>
        </div>
      </div>
      <div className="experience">
        <img src="assets/meta.png" alt="Meta" />
        <div>
          <h2>
            Meta <span className="time"> 1/2024 — 2/2024</span>
          </h2>
          <p>Software Engineer Fellow</p>
        </div>
      </div>
      <div className="experience">
        <img src="assets/vnpt.webp" alt="VNPT" />
        <div>
          <h2>
            VNPT Technology <span className="time"> 4/2022 — 6/2022</span>
          </h2>
          <p>Software Engineer Intern</p>
        </div>
      </div>
      <div className="resume">
        <a href="assets/BinhLeResume.pdf" target="_blank">
          view full resume
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
