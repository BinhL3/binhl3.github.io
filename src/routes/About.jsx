import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const About = () => {
  return (
    <div className="main-container">
    <Header></Header>
    <img src="assets/icon.jpg"></img>
  
    <p>hi, i'm binh le. 20. vietnamese.</p> 
    <hr style={{border: 'none', height: '1px', backgroundColor: 'black'}} />

    <p style={{marginTop: '1em'}}>people probably know me mostly from youtube and tiktok just cause i've done that for 13 years</p>
    <p><strong>p.s. </strong>this picture here is fan art someone made of my minecraft character</p>
    <Footer></Footer>
    </div>
  )
}

export default About