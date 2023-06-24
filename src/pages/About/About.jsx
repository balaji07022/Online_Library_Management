import React from "react";
import "./About.css";
import aboutImg from "../../images/about.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">Sacred Knowledge</h2>
            <p className="fs-17">
              A library is a place where books and sources of information are
              stored. They make it easier for people to get access to them for
              various purposes. Libraries are very helpful and economical too.
              They include books, magazines, newspapers, DVDs, manuscripts and
              more. In other words, they are an all-encompassing source of
              information.
            </p>
            <p className="fs-17">
              Libraries play a vital role in providing people with reliable
              content. They encourage and promote the process of learning and
              grasping knowledge. The book worms can get loads of books to read
              from and enhance their knowledge. Moreover, the variety is so
              wide-ranging that one mostly gets what they are looking for.
            </p>
            <p className="fs-17">
              Welcome to, The Sacred Knowledge Library.
              <br />
              Explore yourself and beyond!
              <br />
              Happy Reading!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
