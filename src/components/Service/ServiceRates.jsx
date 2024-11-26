import React from 'react'
import img from '../../assets/sevice-box.png'

function ServiceRates() {
  return (
     <div className='service-ratings'>
        <div className='each-rate'> 
            <p>24</p>
            <img src={img} alt="" />
            <p>Our Location</p>
        </div>
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
        <div className='each-rate'>
            <p>247+</p>
            <img src={img} alt="" />
            <p>Owned Vehicles</p>
        </div>

    </div>
  )
}

export default ServiceRates