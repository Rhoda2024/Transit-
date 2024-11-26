import React, { useState } from 'react'
import img from '../../assets/Nav-Logo.png'
import icon from '../../assets/icon.png'
import icon1 from '../../assets/icon 1.png'
import icon2 from '../../assets/icon2.png'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NavBar =()=> {
    const [view, SetView] =useState(false);

    const toggleView = ()=> {
        SetView(!view)
    }
  return (
    <nav>
          <div className='nav-texts'>
              <div className='right-nav'>
          <img src={img} alt="" />
               </div>

                <div className='left-nav'>
            <div className='time'>
                <div className='icon1'>
                     <img src={icon1} alt="" />
                </div>
                <div className='icon-text'>
                    <p>Mon - Sat 9.00 - 18.00</p>
                    <p>Sunday Closed</p>
                </div>
            </div>

            <div className='email'>
                <div className='icon2'>
                      <img src={icon} alt="" />
                </div>
                <div className='icon-text'>
                    <p>Email</p>
                    <p>contact@logistics.com</p>
                </div>
            </div>

            <div className='call'>
                <div className='icon3'>
                     <img src={icon2} alt="" />
                </div>
                <div className='icon-text'>
                    <p>Call Us </p>
                    <p>(00) 112 365 489</p>
                </div>
                
            </div>

               
        </div>

        {/* Hamburger Menu */}
        <div className="menu" onClick={toggleView}>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </div>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${view ? "show" : ""}`}>
        <div className='menu-links'>
           <Link to="/" >Home</Link>
              <Link to="/about">About</Link>
              <Link to="/service">Services</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
        </div>
        <div className='menu-icons'>
               <FaInstagram size={20}/>
              <FaFacebook size={20}/>
              <FaTwitter size={20} />
              <FaLinkedin size={20}/>
        </div>
         <button className='quote-button'>Request Quote</button>
      </div>

      </div>
    </nav>
  )
}

export default NavBar