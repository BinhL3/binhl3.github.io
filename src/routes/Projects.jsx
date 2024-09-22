import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Projects = () => {
  return (
    <div className="main-container">
        <Header></Header>
        <ul>

            <li>
              <span className="date">aug 2024 -</span>
              <div className="content">
              <span className="role">
                  <a href="https://www.youtube.com/@binh" target="_blank" rel="noopener noreferrer">
                      tu dien - vietnamese urbandictionary
                  </a>
              </span>
              <p className="description">building a full-stack app providing accurate definitions and context for vietnamese slang, to reconnect and strengthen cultural ties.</p>
              <span className="technologies">react, node.js, scikit-learn, express.js, aws, postgresql</span>
              </div>
          </li>

          <li>
              <span className="date">2013 - present</span>
              <div className="content">
              <span className="role">
                  <a href="https://www.youtube.com/@binh" target="_blank" rel="noopener noreferrer">
                      content creator
                  </a>
              </span>
              <p className="description">amassed 1.3+ million followers by integrating cs education into engaging content for vietnamese teens. directed marketing strategies reaching 300+ million views with brands like tiktok, vng, acer, and vtc games.</p>
              <span className="technologies">youtube, tiktok, instagram, facebook, linkedin, marketing, content creation</span>
              </div>
          </li>
        
          <li>
              <span className="date">aug 2024</span>
              <div className="content">
              <span className="role">
                  <a href="https://binhl3.github.io/">
                      personal website
                  </a>
              </span>
              <p className="description">is this recursion</p>
              <span className="technologies">react, javascript, html, css, node</span>
              </div>
          </li>

          <li>
              <span className="date">apr 2024</span>
              <div className="content">
              <span className="role">
                  <a href="https://github.com/mikth3372/DragonHacks" target="_blank" rel="noopener noreferrer">
                      serenity - dragonhacks 10
                  </a>
              </span>
              <p className="description">led a team of 3 to build an interview platform using humeapi for live emotional insights, winning best tech domain at dragonhacks 2024. designed the backend with session validation and integrated openai.</p>
              <span className="technologies">python, flask, humeapi, openai, react, tailwind, html, css, numpy, matplotlib</span>
              </div>
          </li>
          <li>
              <span className="date">apr 2024</span>
              <div className="content">
              <span className="role">
                  <a href="https://github.com/kxllydo/codefest24-25" target="_blank" rel="noopener noreferrer">
                      adopteam - philly codefest 2024
                  </a>
              </span>
              <p className="description">spearheaded ml model integration using multilayer perceptrons, achieving 80% success in parent-child pairings to make adoption more accessible and refine the process. used 1000 samples with various attributes for kids and adults, targeting compatibility.</p>
              <span className="technologies">python, keras, tensorflow, pandas, scikit-learn</span>
              </div>
          </li>
          <li>
              <span className="date">dec 2023</span>
              <div className="content">
              <span className="role">
                      student survey & test system - drexel university
              </span>
              <p className="description">leveraged 4+ design patterns in a java program to enable seamless future feature integration and optimized serialization for 50% faster runtime.</p>
              <span className="technologies">java, design patterns, serialization</span>
              </div>
          </li>
          <li>
              <span className="date">aug 2023</span>
              <div className="content">
              <span className="role">
                  <a href="https://github.com/BinhL3/MultiplayerSnake" target="_blank" rel="noopener noreferrer">
                    2d multiplayer snake
                  </a>
              </span>
              <p className="description">developed a 2d multiplayer snake game like slither.io using rest apis, phaser, and socket.io. led a team of 3 and implemented ci/cd with github actions.</p>
              <span className="technologies">javascript, react, socket.io, phaser, rest apis</span>
              </div>
          </li>
          <li>
              <span className="date">aug 2023</span>
              <div className="content">
              <span className="role">
                      mini unix shell - drexel university
              </span>
              <p className="description">engineered a c-based shell with system command execution, io redirection, and efficient process piping. added features like background task execution and directory navigation on tux servers.</p>
              <span className="technologies">c, tux servers, system programming</span>
              </div>
          </li>

          <li>
              <span className="date">jan - jun 2023</span>
              <div className="content">
              <span className="role">
                  <a href="https://github.com/BinhL3/Mangrove---Webagenda" target="_blank" rel="noopener noreferrer">
                    mangrove agenda
                  </a>
              </span>
              <p className="description">led a team-based agile full-stack project, mangrove agenda, at drexel to streamline student scheduling. designed the backend with python, flask, javascript for session validation, and sqlalchemy for database management. integrated openai and fullcalendar apis for a seamless user experience.</p>
              <span className="technologies">python, flask, javascript, sqlalchemy, openai, fullcalendar</span>
              </div>
          </li> 
          <li>
              <span className="date">apr - jun 2022</span>
              <div className="content">
              <span className="role">
                  pacman replication - vin university
              </span>
              <p className="description">collaborated with 3 peers to develop a pacman replication game in java and javafx. reduced bugs by 70% with optimized collision detection to update the game state.</p>
              <span className="technologies">java, javafx, object-oriented programming, design patterns</span>
              </div>
          </li> 
          <li>
              <span className="date">2021 - 2022</span>
              <div className="content">
              <span className="role">
                  autonomous car - cecs day
              </span>
              <p className="description">engineered a pre-trained model into an autonomous car, boosting track detection accuracy by 20% using opencv. secured top 2 best recycling solution at vinuni hackathon by implementing ar for cultural heritage preservation.</p>
              <span className="technologies">python, opencv, arduino, makerbot microcontroller, figma, esp32-cam module</span>
              </div>
          </li> 
        </ul>
        <Footer></Footer>
    </div>
  )
}

export default Projects