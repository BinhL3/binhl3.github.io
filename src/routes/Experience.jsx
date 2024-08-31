import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
const Experience = () => {
  return (
    <div className="main-container">
    <Header></Header>
    <ul>
        <li>
            <span className="date">2024 - present</span>
            <div className="content">
            <span className="role"> 
                <a href="https://soar-lab.github.io/" target="_blank" rel="noopener noreferrer">
                    research assistant @ soar lab
                </a>
            </span>
            <p className="description">co-authored a paper on security risks of llm-generated code. analyzed 1,000+ devgpt conversations, creating visualizations to highlight llm inaccuracies. developed scripts to fetch and clean github security data using python and pandas.</p>
            <span className="technologies">python, pandas, matplotlib, seaborn, jupyter notebook, numpy, github api</span>
            </div>
        </li>

        <li>
            <span className="date">jul - sep 2024</span>
            <div className="content">
            <span className="role">
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
                    fellow @ google
                </a>
            </span>
            <p className="description">participate in pair programming sessions with google engineer for 10 weeks, and receive mentorship to prepare for technical and behavioral interviews.</p>
            </div>
        </li>

        <li>
            <span className="date">apr - sep 2024</span>
            <div className="content">
            <span className="role">
                <a href="https://dataing.io/" target="_blank" rel="noopener noreferrer">
                    software engineer co-op @ dataing
                </a>
            </span>
            <p className="description">led efforts in automating user data retrievals from social media APIs, enhancing authentication processes and overall system efficiency. oversaw the integration of third-party services into an ios app and played a key role in qa to ensure seamless data extraction and feature reliability.</p>
            <span className="technologies">typescript, firestore, typesaurus, react, swift, api, aws, terraform, kubernetes, docker</span>
            </div>
        </li>

        <li>
            <span className="date">apr - jul 2024</span>
            <div className="content">
            <span className="role">
                <a href="https://codeinplace.stanford.edu/" target="_blank" rel="noopener noreferrer">
                    section leader @ stanford
                </a>
            </span>
            <p className="description">taught cs106a introduction to programming course for stanford</p>
            </div>
        </li>

        <li>
            <span className="date">jan - feb 2024</span>
            <div className="content">
            <span className="role">
                <a href="https://www.meta.com/" target="_blank" rel="noopener noreferrer">
                    fellow @ meta
                </a>
            </span>
            <p className="description">participated in meta's winter cohort of abcs fellowship to learn about ds&a problem solving and meta's interview process</p>
            </div>
        </li>

        <li>
            <span className="date">apr - jun 2022</span>
            <div className="content">
            <span className="role">
                <a href="https://vnpt-technology.vn/en" target="_blank" rel="noopener noreferrer">
                    software engineer intern @ vnpt
                </a>
            </span>
            <p className="description">conducted research to support error reduction in product development alongside fellow interns. developed a python script to streamline data cleaning, significantly enhancing work efficiency. gained insights into the product development process through factory tours.</p>
            </div>
        </li>
        
    </ul>
    <div className='resume'>
    <a href="src/assets/BinhLeResume.pdf" target="_blank">view full resume</a>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Experience