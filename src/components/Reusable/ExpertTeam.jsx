 import React from 'react'
import img1 from '../../assets/team member 1.png'
import img2 from '../../assets/team member 2.png'
import img3 from '../../assets/team member 3.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function ExpertTeam() {
  const teams = [
    {img:img1,name:"Jessca Arow",post:"Designer"},
    {img:img2,name:"Kathleen Smith",post:"Designer"},
    {img:img3, name:"Rebecca Tylor",post:"Designer"}
  ]
  return (
<div className='teams'>
      <div>
        <p className='titles'>The Transporters</p>
        <p className='titles-header'>Meet Expert Team</p>
     </div>
      <div className='expert-teams'>
         {teams.map((team,index)=>( 
        <div className='each-team' key={index}>
          <div className='members'><img src={team.img} alt="" /></div>
          <div className='team-position'>
            <p>{team.name}</p>
            <p>{team.post}</p>
          </div>
          <div className='socials-expert'><FaInstagram size={20}/>
              <FaFacebook size={20}/>
              <FaTwitter size={20} />
              <FaLinkedin size={20}/>
              </div>
      </div>
        ))}
   </div>
</div>
   
   
  )
}

export default ExpertTeam