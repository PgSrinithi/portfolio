import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import contactMeImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <h2 className="title">Portfolio</h2>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          className="desktopMenuListItem"
        >
          Experience
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behaviour: "smooth" })
        }
      >
        <img src={contactMeImg} alt="COntact Me" className="desktopMenuImg" />
        Contact Me
      </button>
      <img
        alt="menu"
        src={menu}
        className="mobMenu"
        onClick={() => setShowMenu((prev) => !prev)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="mobMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="mobMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="mobMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          className="mobMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Experience
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          className="mobMenuListItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
