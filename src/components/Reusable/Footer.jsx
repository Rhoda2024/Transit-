import React from 'react'
import img from '../../assets/Nav-Logo.png'
import icon from '../../assets/icon 1.png'
import icon1 from '../../assets/icon2.png'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-background'>

     <div className='footer'>
      <div className='foot2'>
        <div className='foot-logo'><img src={img} alt="" /></div>
        <div>
          <p>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
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
                     <img src={icon1} alt="" />
                </div>
                <div className='icon-text'>
                    <p>Call Us </p>
                    <p>(00) 112 365 489</p>
                </div>
                
            </div>
        </div>
      </div>
      <div className='foot1'>
        <p>Pages</p>
        <p>About Us</p>
        <p>Our Team</p>
        <p>Our Project</p>
        <p>Pricing</p>
        <p>Contact</p>

      </div>
      <div className='foot1'>
        <p>Utility</p>
        <p>Changelog</p>
        <p>Licenses</p>
        <p>Style Guide</p>
       <p>Protected</p>
      <p>Not Found</p>
      </div>
      <div className='foot1'>
        <p>Subscribe</p>
        <input type="text" name="" id="" placeholder='Email here*' />
<        div className='foot-btn'>
             <button className='btn'>Send Now</button>
            <FaFacebook size={20}/>
              <FaTwitter size={20} />
              <FaLinkedin size={20}/>
          </div>
      </div>
    </div>

    </div>
  )
}

export default Footer