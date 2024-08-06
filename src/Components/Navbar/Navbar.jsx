import React, { useState } from "react";
// import { FaBars, FaTimes } from 'react-icons/fa';
import "./Navbar.css";
import logo from "./srsdp.jpeg";
import About from "../About/About";
// import AppRouter from './Router';
import { NavLink, useNavigate } from "react-router-dom";

// import { IoIosCloseCircle } from "react-icons/io";
// import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  const navigate = useNavigate();
  return (
    <nav>
      <section className="flex_content">
        <figure className="logo fixed_flex">
          <img src={logo} alt />

          <figcaption>
            {/* <strong className="title">SRS</strong> Home Tutors */}
          </figcaption>
        </figure>
      </section>

      <section className="flex_content nav_content" id="nav_content">
        <NavLink to="/" className={(e) => (e.isActive ? "text-red-500" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/gallery"
          className={(e) => (e.isActive ? "text-red-500" : "")}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/services"
          className={(e) => (e.isActive ? "text-red-500" : "")}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={(e) => (e.isActive ? "text-red-500" : "")}
        >
          Contact us
        </NavLink>
        <NavLink
          to="/about"
          className={(e) => (e.isActive ? "text-red-500" : "")}
        >
          About us
        </NavLink>
      </section>

      <section className="flex_content">
        {/* <a href="javascript:void(0)" className="ham"><i className="fa fa-bars" /></a> */}
      </section>
    </nav>
  );
};

export default Navbar;
