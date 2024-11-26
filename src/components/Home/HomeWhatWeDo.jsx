import React from 'react'
import icon1 from '../../assets/Sea.png'
import icon2 from '../../assets/Warehousing.png'
import icon3 from '../../assets/Air.png'
import icon4 from '../../assets/Local.png'

function HomeWhatWeDo() {
    const services = [
        {icon:icon1,title:"Sea Transport Services",description:"Following the quality of our service thus having gained trust of our many clients"},
        {icon:icon2,title:"Warehousing Services",description:"Following the quality of our service thus having gained trust of our many clients"},
        {icon:icon3,title:"Air Fright Services",description:"Following the quality of our service thus having gained trust of our many clients"},
        {icon:icon4,title:"Local Shipping Services",description:"Following the quality of our service thus having gained trust of our many clients"},
    ]
  return (
    <div className='what-we-do'>
        <div className='what-we-do-left'>
            <p className='titles'>What We Do</p>
            <p className='titles-header'>Safe & Reliable Cargo Solutions</p>
        </div>
        <div className='what-we-do-right'>
            {services.map((service,index)=>(
              <div className='what-we-do-grid' key={index}>
                  <div>
                     <img src={service.icon} alt="" />
                   </div>
                   <div>
                     <p className='service-title'>{service.title}</p>
                     <p className='service-description'>{service.description}</p>
                   </div>  
              </div>
             ))}
           
        </div>


        {/* <div className='what-we-do-right'>
            {services.map((service,index)=>(
                    <div className='what-we-do-grid' key={index}>
                <div>
                    <img src={service.icon} alt="" />
                </div>
                <div>
                    <p>{service.title}</p>
                    <p>{service.description}</p>
                </div>
            </div>
            ))}
        </div> */}
    </div>
  )
}

export default HomeWhatWeDo