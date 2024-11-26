import React from 'react'
import img1 from '../../assets/why-Background.png'
import icon1 from '../../assets/about-whyUsDelivery.png'
import icon2 from '../../assets/About-whyUsOptimized.png'
import img2 from '../../assets/girl.png'
import img3 from '../../assets/airplane.jpg'
import img from '../../assets/sevice-box.png'

function HoemWhyUs() {
  return (
    <div className='why-us'>
        <div className='why-background'>
            <img src={img1} alt="" />
        </div>

        <div className='why-absolute'>
            <div className='why-left'>
               <p className='titles'>Why Us</p>
               <p className='titles-header'>We provide full range global logistics solution</p>
               <p className='why-desc'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </p>
               <p className='why-desc'>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>

               <div className='icons'>
                <img src={icon1} alt="" />
                <p>Delivery on Time</p>
               </div>
               <div className='icons'>
                <img src={icon2} alt="" />
                <p>Optimized Travel Cost</p>
               </div>
            </div>


            <div className='why-right'>
                 <div className='why-absolute2'><img src={img3} alt="" /></div>
                <div className='why-relative'><img src={img2} alt="" /></div>
            </div>
        </div>
       <div className='rating'>
           <div className='each-rate'>
               <p>1294</p>
               <img src={img} alt="" />
               <p>Delivered Pacakages</p>
            </div>
           <div className='each-rate'>
              <p>3594</p>
              <img src={img} alt="" />
              <p>Satisfied Clients</p>
           </div>
        </div>

    </div>
  )
}

export default HoemWhyUs