import Header from './Header'
import Footer from './Footer'
import Card from './Card';
import React, { useState, useEffect } from 'react';

function App() {
  return(
    <div className="main-container">
      <Header></Header>
      <img src="src/assets/nycsubway.jpg"></img>
      <p>hi, i'm binh le.</p>
      <p>thanks for being here.</p>
      <p>i had a lot of trouble deciding on how my portfolio site should be but after a discussion with my web dev professor, and being really inspired from herman's blog i now think less is more.</p>
      <p>i made this site to free myself from the a4 limits of traditional resumes.</p>
      <p>oh. and im 20 years old. a cs major @ drexel</p>
      <Footer></Footer>
    </div>
  );
}

export default App
