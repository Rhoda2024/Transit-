import React from 'react'
import img1 from '../../assets/Kathleen Smith.png'
import img2 from '../../assets/John martin.png'
import icon from '../../assets/icon-testimony.png'
import { IoIosStar } from "react-icons/io";

function Testimonials() {
const testimonies =[
  {img:img1, name:"Kathleen Smith", job:"Fuel Company", icon:icon, comments:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."},
  {img:img2, name:"John Martin", job:"Restoration Company", icon:icon, comments:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}
  
]
  return (
    <div className='test-background'>
  <div className='what-our-customerSay'>
    <div className='titles'>Testimonials</div> 
    <div>
      <div><p className='titles-header'>What Our Customer Say</p></div>
      <div></div>
    </div> 
    <div className='testimonies'>
      {testimonies.map((testimony,index)=>(
        <div className='testimony' key={index}>
          <div className='each-testimony'>
            <div className='img-name'>
              <div><img src={testimony.img} alt="" /></div>
              <div>
                <p className='test-name'>{testimony.name}</p>
                <p className='test-job'>{testimony.job}</p>
              </div>
            </div>
            <div className='icon'>
              <img src={testimony.icon} alt="" />
            </div>
          </div>
          <div className='comments'>{testimony.comments}</div>
          <div className='rating'>
            <IoIosStar color='rgba(253, 175, 59, 1)' size={30}/>
            <IoIosStar color='rgba(253, 175, 59, 1)' size={30}/>
            <IoIosStar color='rgba(253, 175, 59, 1)' size={30}/>
            <IoIosStar color='rgba(253, 175, 59, 1)' size={30}/>
            <IoIosStar color='rgba(253, 175, 59, 1)' size={30}/>
          </div>
        </div>

      ))}

    </div>
  </div>
  </div>
  )
}

export default Testimonials