import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
export default function Header(props) {
  return (
    <>
      <h1><a href="https://binhl3.github.io/">binh le</a></h1>
      <nav>
        <ol>
          <li><Link to="/">home</Link></li>
          <li><Link to="/experience">experience</Link></li>
          <li><Link to="/projects">projects</Link></li>
          <li><Link to="/about">about</Link></li>
        </ol>
      </nav>
    </>
  );
}
