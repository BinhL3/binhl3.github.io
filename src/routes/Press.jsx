import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Press = () => {
  return (
    <div className="main-container">
      <Header></Header>
      <ul>
        <li>
          <div className="content">
            <p>here are a list of online publications that featured me</p>
            <span className="role">
              <a
                href="https://kenh14.vn/chang-trai-viet-o-my-chi-tan-16-trieu-di-gan-200km-chi-de-an-bun-dau-mam-tom-dat-nhat-the-gioi-215240808222930884.chn"
                target="_blank"
                rel="noopener noreferrer"
              >
                College Student tries the Most Expensive "Bún Đậu Mắm Tôm" in
                New York (Vietnamese)
              </a>
            </span>
          </div>
        </li>
        <li>
          <div className="content">
            <span className="role">
              <a
                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=Ej-xwIkAAAAJ&citation_for_view=Ej-xwIkAAAAJ:u5HHmVD_uO8C"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Research Paper on LLMs and security
              </a>
            </span>
          </div>
        </li>
      </ul>
      <Footer></Footer>
    </div>
  );
};

export default Press;
