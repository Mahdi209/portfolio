import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  const [isClick, setIsClick] = useState(true);

  function handleClick() {
    setIsClick(!isClick);
  }

  function handleCheckboxChange(event) {
    const isChecked = event.target.checked;

    document.body.style.backgroundColor = isChecked ? "#10131A" : "white";
    document.body.style.color = isChecked ? "white" : "#10131A";
  }

  return (
    <>
      <nav className="navBar">
        <div>Mohammed Mahdi</div>
        <ul className="contact">
          <li>
            <Link to="home" duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="project" duration={500}>
              Project
            </Link>
          </li>
          <li>
            <Link to="about" duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="contact" duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="checkBox" id="checkbox-wrapper-54">
          <label id="switch">
            <input type="checkbox" onChange={handleCheckboxChange} />
            <span id="slider"></span>
          </label>
        </div>

        <div className="hum" onClick={handleClick}>
          <GiHamburgerMenu />
        </div>
      </nav>

      <div className="pos" style={isClick ? { display: "none" } : {}}>
        <div className="sm-nav">
          <div id="checkbox-wrapper-54">
            <label id="switch">
              <input type="checkbox" onChange={handleCheckboxChange} />
              <span id="slider"></span>
            </label>
          </div>
          <ul>
            <li>
              <Link to="home" duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="project" duration={500}>
                Project
              </Link>
            </li>
            <li>
              <Link to="about" duration={500}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="contact" duration={500}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
