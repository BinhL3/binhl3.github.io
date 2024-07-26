import Header from './Header'
import Footer from './Footer'
import Card from './Card';
import React, { useState, useEffect } from 'react';
import Timeline from './Timeline';

function App() {
  const experiences = [
    {
      startDate: "7 2024",
      endDate: "PRESENT",
      title: "Software Engineer Prep Fellow · Google",
      subtitle: "New York, NY",
      description: "Participating in technical problem-solving sessions with a Google SWE, selected from 400+ applicants.",
      skills: ["Problem Solving", "Algorithms", "Data Structures"]
    },
    {
      startDate: "4 2024",
      endDate: "PRESENT",
      title: "Software Engineer Coop - Backend · Dataing",
      subtitle: "Glendale, CA",
      description: "Optimizing authentication, integrating Google services, and improving database performance for iOS app development.",
      skills: ["TypeScript", "Firestore", "Typesaurus", "React", "Swift", "API", "HealthKit", "PhotoKit"]
    },
    {
      startDate: "3 2024",
      endDate: "PRESENT",
      title: "Research Assistant · Software Engineering Analytics Research (SOAR) Lab",
      subtitle: "Philadelphia, PA",
      description: "Analyzing DevGPT dataset to identify code security risks in LLM integration and designing visualization graphs.",
      skills: ["Data Analysis", "Visualization", "LLM", "Security"]
    },
    {
      startDate: "4 2024",
      endDate: "6 2024",
      title: "Section Leader · Stanford University",
      subtitle: "Stanford, CA",
      description: "Facilitating CS106A Intro To Programming for 10,000+ global students and contributing to student resources.",
      skills: ["Teaching", "Programming", "Career Development"]
    },
    {
      startDate: "1 2024",
      endDate: "2 2024",
      title: "ABCS Fellow · Meta",
      subtitle: "Menlo Park, CA",
      description: "Participating in Meta's data structures and algorithms preparation program, selected as top 7% of U.S. applicants.",
      skills: ["Data Structures", "Algorithms"]
    },
    {
      startDate: "4 2022",
      endDate: "6 2022",
      title: "Software Engineer Intern · VNPT Technology",
      subtitle: "Remote",
      description: "Developed Python scripts for data cleaning, processing 500+ online articles and improving work output by 75%.",
      skills: ["Python", "Data Cleaning", "Scripting"]
    }
  ];

  return(
    <>
      <div className="min-h-screen bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-500">
          <Header name="Hi, I'm Binh Le" title="CS Student, Content Creator" description="I'm interested in building AI applications and philanthropic endeavors."/>
          <Card  title="ABOUT" description="A proud Vietnamese studying Computer Science at Drexel. If I'm not coding or looking for internships, I'm most likely recording and editing YouTube videos for 1.2+ million people."/>
          <Card title="EXPERIENCE">
            <Timeline experiences={experiences} />
          </Card>
      </div>
      <Footer name="Binh" />      
    </>
  );
}

export default App
