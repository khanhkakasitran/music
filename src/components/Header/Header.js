import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./Header.css";
import Search from "../Search/Search";
function Header() {
  return (
    <div className="header">
      <div className="headerWithSearch">
        <button className="headerButton">
          <i>
            <BsArrowLeft />
          </i>
        </button>
        <button className="headerButton buttonDisabled">
          <i>
            <BsArrowRight />
          </i>
        </button>
        <Search />
      </div>
      <div className="headerNav"></div>
    </div>
  );
}

export default Header;
