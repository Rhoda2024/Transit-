import React from 'react'
import img1 from '../../assets/about-company bus.png'
import img2 from '../../assets/about delivery.png'

function AboutOurCompany() {
  return (
    <div className='our-company'>
      <div className='company-right'>
        <div><img src={img1} alt="" /></div>
        <div className='delivery-man'><img src={img2} alt="" /></div>
      </div>
      <div className='company-left'>
        <p className='titles'>About Us</p>
        <p className='titles-header'>Our Company Overview</p>
        <p className='desc'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
        <div className='company-btn'>
          <button className='btn'>Our Approach</button>
          <button className='btn'>Our Approach</button>
          <button className='btn'>Our Approach</button>
        </div>
        <p className='desc'>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.</p>
        <button className='btn'>Learn More</button>
      </div>
    </div>

  )
}

export default AboutOurCompany