import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find the book of your choice
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            "Show me a family of readers, and I will show you the people who
            move the world." <br /> – Napoleon Bonaparte
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
