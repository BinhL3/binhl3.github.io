import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import webpic from './assets/webpic.jpg';

export default function Header(props) {
  const [showEmail, setShowEmail] = useState(false);

  const handleHireMeClick = () => {
    setShowEmail(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('bql23@drexel.edu');
  };

  return (
    <header className="flex flex-col items-center bg-slate-900 p-5">
      <img src={webpic} alt="Profile" className="transition-transform duration-300 transform hover:scale-105 shadow-lg rounded-full h-auto max-w-xs shadow-xl m-10" />
      <h1 className="text-5xl block hover:text-slate-200 font-bold text-slate-50 transition-transform duration-300 transform hover:scale-105 shadow-lg">
        {props.name}
      </h1>
      <div className="transition-transform duration-300 transform hover:scale-105 shadow-lg text-sky-300 text-lg mt-2 h-6">
        <Typewriter
          options={{
            strings: ['CS @ Drexel', 'Content Creator', 'Software Engineer Intern'],
            autoStart: true,
            loop: true,
            deleteSpeed: 50
          }}
        />
      </div>
      <div className="text-slate-500 text-m mt-2 items-center">
        {props.description}
      </div>
      <ul className="flex space-x-4 mt-4">
        <li>
          <a href="https://www.linkedin.com/binhlee" className="hover:text-slate-100 text-slate-500" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@binh" className="hover:text-slate-100 text-slate-500" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.x.com/_binhle" className="hover:text-slate-100 text-slate-500" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.github.com/binhl3" className="hover:text-slate-100 text-slate-500" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/_binhle" className="hover:text-slate-100 text-slate-500" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@binhl3" className="hover:text-slate-100 text-slate-500" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
        </li>
      </ul>
      {showEmail ? (
        <div className="mt-4 flex items-center justify-between p-2 bg-slate-800 rounded-lg shadow-lg w-48">
          <span className="text-slate-50 mx-auto">bql23@drexel.edu</span>
          <button 
            onClick={handleCopyEmail} 
            className="p-1 bg-transparent text-slate-500 rounded-full hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 7H5v10h10V7zm-1-4H6v1h8V3zm1-2H5a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V2a1 1 0 00-1-1zM4 6V4a1 1 0 011-1h10a1 1 0 011 1v2H4z" />
            </svg>
          </button>
        </div>
      ) : (
        <button 
          onClick={handleHireMeClick} 
          className="mt-4 flex items-center justify-center space-x-2 p-2 bg-slate-800 text-white rounded-lg transition-transform duration-300 transform hover:scale-105 shadow-lg hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 w-48"
        >
          <span>Hire Me</span>
        </button>
      )}
    </header>
  );
}
