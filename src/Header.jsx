import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaMailBulk, FaTwitter } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import "./index.css";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function Header(props) {
  return (
    <>
      <div>
        <h1 className="headerStyle">
          <a className="headerTitle" href="https://binhl3.github.io/">
            binh le
          </a>
          <div className="iconContainer">
            <a
              className="headerIcon"
              href="https://linkedin.com/in/binhlee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              className="headerIcon"
              href="https://github.com/binhl3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              className="headerIcon"
              href="https://scholar.google.com/citations?user=Ej-xwIkAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGraduationCap size={24} />
            </a>
            {/* <a className="headerIcon" href="mailto:bql23@drexel.edu" target="_blank" rel="noopener noreferrer">
              <FaMailBulk size={24} />
            </a> */}
            <a
              className="headerIcon"
              href="https://twitter.com/_binhle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </h1>
      </div>
      <nav>
        <ol>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/experience">experience</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ol>
      </nav>
    </>
  );
}
