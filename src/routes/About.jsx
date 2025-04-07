import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const About = () => {
  return (
    <div className="main-container">
      <Header></Header>
      <img className="header-image" src="assets/icon.jpg" loading="lazy" alt="Fan Art" />

      <p>contact me: bql23@drexel.edu</p>
      <hr style={{ border: "none", height: "1px", backgroundColor: "black" }} />
      <p style={{ marginTop: "1em" }}>
        hi i'm binh! i'm 21 years old and vietnamese :D
      </p>
      <p>
        people probably know me mostly from youtube and tiktok just cause i've
        done that for 13 years
      </p>
      <p>
        <strong>p.s. </strong>this picture here is fan art someone made of my
        minecraft character
      </p>
      <div className="experience">
        <img src="assets/bentley.png" alt="Bentley" loading="lazy" />
        <div>
          <h2>
            Bentley Systems
            <span className="time"> 3/2025 — 9/2025</span>
          </h2>
          <p className="description">Software Engineer Intern (Platforms)</p>
          <span className="technologies">React.js · TypeScript · C++</span>
          <ul className="achievements">
            <li>Developing iTwin Viewer 5.0, a cloud-based infrastructure visualization platform</li>
            <li>Reduced internal tool latency by 65% (2000ms → 700ms) through implementing parallel HTTP schema fetches</li>
            <li>Optimized client-side state hydration, cutting cold start time from 6+ seconds to near zero</li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
