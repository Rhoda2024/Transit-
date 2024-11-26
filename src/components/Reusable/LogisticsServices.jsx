import React from 'react'
import icon1 from '../../assets/Sea.png'
import icon2 from '../../assets/Warehousing.png'
import icon3 from '../../assets/Air.png'
import icon4 from '../../assets/project-icon.png'
import icon5 from '../../assets/Local.png'
import icon6 from '../../assets/customer-icon.png'

function LogisticsServices() {
    const logistics =[
        {icon:icon1, title:"Sea Transport Services",description:"Following the quality of our service thus having gained trust of our many clients." },
        {icon:icon2,title:"Warehousing Services",description:"Following the quality of our service thus having gained trust of our many clients." },
        {icon:icon3,title:"Air Fright Services",description:"Following the quality of our service thus having gained trust of our many clients." },
        {icon:icon4,title:"Project & Exhibition",description:"Following the quality of our service thus having gained trust of our many clients." },
        {icon:icon5,title:"Local Shipping Services",description:"Following the quality of our service thus having gained trust of our many clients." },
        {icon:icon6,title:"Customer Clearance",description:"Following the quality of our service thus having gained trust of our many clients." },
    ]
  return (
    <div className='logistics-services-back'>
        <div className='logistics-service'>
            <div className='logistics-header'>
            <p className='titles'>What We Do</p>
            <p className='titles-header'>Our Logistics Service</p>
        </div>
        <div className='logistics-service-mode'>
            {logistics.map((logistic,index)=>(
                <div className='logistics-grid' key={index}>
                    <div><img src={logistic.icon} alt="" /></div>
                    <div>
                        <p className='service-title'>{logistic.title}</p>
                        <p className='service-description'>{logistic.description}</p>
                    </div>
                </div>
            ))}

        </div>
        <button className='btn'>More Works</button>
        </div>
    </div>
  )
}

export default LogisticsServices