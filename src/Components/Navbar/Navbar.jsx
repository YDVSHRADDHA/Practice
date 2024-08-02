import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from './srsdp.jpeg';
import About from '../About/About';
// import AppRouter from './Router';
import { Link } from 'react-router-dom';

import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

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
    <a href="/" >Home</a>
    <a href="/gallery">Gallery</a>
    <a href="/services">Services</a>

    <a href="/contact" className="contact_btn">Contact us</a>
    <a href="/about">About us</a>
  </section>
  <section className="flex_content">
    {/* <a href="javascript:void(0)" className="ham"><i className="fa fa-bars" /></a> */}
  </section>
</nav>

  );
};

export default Navbar;
