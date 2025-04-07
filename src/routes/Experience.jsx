import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Experience = () => {
  return (
    <div className="main-container">
      <Header></Header>

      <h2>professional experience</h2>
      <ul>
        <li>
          <span className="date">mar - sep 2025</span>
          <div className="content">
            <span className="role">
              <a
                href="https://bentley.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                software engineer co-op @ bentley systems
              </a>
            </span>
            <p className="description">software engineer intern (platforms)</p>
            <p className="description">
              developing iTwin Viewer 5.0, a cloud-based infrastructure visualization platform. 
              reduced internal tool latency by 65% (2000ms → 700ms) through implementing parallel HTTP schema fetches. 
              optimized client-side state hydration, cutting cold start time from 6+ seconds to near zero.
            </p>
            <span className="technologies">react.js · typescript · c++</span>
          </div>
        </li>

        <li>
          <span className="date">jan - mar 2025</span>
          <div className="content">
            <span className="role">
              <a
                href="https://codeinplace.stanford.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                marketing + outreach intern @ stanford
              </a>
            </span>
            <p className="description">generate online content and expose more students to free online cs education</p>
            <span className="technologies">passion, cs knowledge, creativity</span>
          </div>
        </li>

        <li>
          <span className="date">apr - sep 2024</span>
          <div className="content">
            <span className="role">
              <a
                href="https://dataing.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                software engineer co-op @ dataing
              </a>
            </span>
            <p className="description">
              led efforts in automating user data retrievals from social media
              APIs, enhancing authentication processes and overall system
              efficiency. oversaw the integration of third-party services into
              an ios app and played a key role in qa to ensure seamless data
              extraction and feature reliability.
            </p>
            <span className="technologies">
              typescript, firestore, typesaurus, react, swift, api, aws,
              terraform, kubernetes, docker
            </span>
          </div>
        </li>

        <li>
          <span className="date">mar - oct 2024</span>
          <div className="content">
            <span className="role">
              <a
                href="https://soar-lab.github.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                research assistant @ soar lab
              </a>
            </span>
            <p className="description">
              co-authored a paper on security risks of llm-generated code.
              analyzed 1,000+ devgpt conversations, creating visualizations to
              highlight llm inaccuracies. developed scripts to fetch and clean
              github security data using python and pandas.
            </p>
            <span className="technologies">
              python, pandas, matplotlib, seaborn, jupyter notebook, numpy,
              github api
            </span>
          </div>
        </li>

        <li>
          <span className="date">apr - jun 2024</span>
          <div className="content">
            <span className="role">
              <a
                href="https://codeinplace.stanford.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                section leader @ stanford
              </a>
            </span>
            <p className="description">
              taught cs106a introduction to programming course for stanford
            </p>
          </div>
        </li>
        <li>
          <span className="date">apr - jun 2022</span>
          <div className="content">
            <span className="role">
              <a
                href="https://vnpt-technology.vn/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                software engineer intern @ vnpt
              </a>
            </span>
            <p className="description">
              conducted research to support error reduction in product
              development alongside fellow interns. developed a python script to
              streamline data cleaning, significantly enhancing work efficiency.
              gained insights into the product development process through
              factory tours.
            </p>
          </div>
        </li>
      </ul>

      <h2>campus activities</h2>
      <ul>
        <li>
          <span className="date">2024 - present</span>
          <div className="content">
            <span className="role">
              <a
                href="https://cci.drexel.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                course assistant @ drexel
              </a>
            </span>
            <p className="description">
              teaching assistant for software engineering course se 320
              concerning software validation and verification
            </p>
            <span className="technologies">java, junit, git, python, bash</span>
          </div>
        </li>

        <li>
          <span className="date">2024 - present</span>
          <div className="content">
            <span className="role">
              <a
                href="https://cci.drexel.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                dean's ambassador @ drexel
              </a>
            </span>
            <p className="description">
              assisting the dean in managing student affairs and representing
              the student body in faculty meetings.
            </p>
            <span className="technologies">a lot of love for the school</span>
          </div>
        </li>
      </ul>

      <h2>fellowships</h2>
      <ul>
        <li>
          <span className="date">jul - sep 2024</span>
          <div className="content">
            <span className="role">
              <a
                href="https://google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fellow @ google
              </a>
            </span>
            <p className="description">
              participate in pair programming sessions with google engineer for
              10 weeks, and receive mentorship to prepare for technical and
              behavioral interviews.
            </p>
          </div>
        </li>

        <li>
          <span className="date">jun - aug 2024</span>
          <div className="content">
            <span className="role">
              <a
                href="https://codepath.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fellow @ codepath
              </a>
            </span>
            <p className="description">
              took tip102 and participated in pair programming sessions with
              fellow fellows to prepare for technical interviews.
            </p>
          </div>
        </li>

        <li>
          <span className="date">jan - feb 2024</span>
          <div className="content">
            <span className="role">
              <a
                href="https://www.meta.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fellow @ meta
              </a>
            </span>
            <p className="description">
              participated in meta's winter cohort of abcs fellowship to learn
              about ds&a problem solving and meta's interview process
            </p>
          </div>
        </li>
      </ul>

      <div className="resume">
        <a href="assets/BinhLeResume.pdf" target="_blank">
          view full resume
        </a>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Experience;
