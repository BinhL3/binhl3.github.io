import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import webpic from './assets/webpic.jpg';

import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <>
      <h1>binh's letters</h1>
      <nav>
        <ol>
          <li><Link to="/">home</Link></li>
          <li><Link to="/experience">experience</Link></li>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/about">about me</Link></li>
        </ol>
      </nav>
    </>
  );
}
