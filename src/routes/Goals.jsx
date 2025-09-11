import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Goals = () => {
  return (
    <div className="main-container">
      <Header></Header>
      <h2>
        i have it public so mention it if you meet me in person if i'm falling
        behind
      </h2>
      <ul>
        <li>1.000.000 subscribers: 2025</li>
        <li>1.000.000 followers: 2025</li>
        <li>6 pack: 2025</li>
        <li>buy a car: 2026</li>
      </ul>
      <h3>
        (will change to road map style art with nodes soon bc i hate lists)
      </h3>
      <Footer></Footer>
    </div>
  );
};

export default Goals;
