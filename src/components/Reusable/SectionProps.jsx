import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SectionProps = ({img, p, p1, p2, button ,height}) => {
  return (
    <div>
        <div style={{backgroundImage: `url(${img})`, height: height}} className='section-props' >
          <div className='section-props-nav'>
            <div className='section-props-right'>
              <Link to="/" >Home</Link>
              <Link to="/about">About</Link>
              <Link to="/service">Services</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className='section-props-left'>
              <FaInstagram size={20}/>
              <FaFacebook size={20}/>
              <FaTwitter size={20} />
              <FaLinkedin size={20}/>
              <button>Request Quote</button>
            </div>


          </div>
          <div className='section-props-texts'>
            <p className='titles'>{p}</p>
            <p className='hero-header'>{p1}</p>
            <p className='hero-desc'>{p2}</p>
            <button className='btn'>{button}</button>
          </div>
       </div>

    </div>
  );
};

export default SectionProps