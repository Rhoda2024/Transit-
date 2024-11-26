import React from 'react'
import img1 from '../../assets/studio green.png'
import img2 from '../../assets/studio green logo.png'
import img3 from '../../assets/Norto black-about.png'
import img4 from '../../assets/points-black.png'
import img5 from '../../assets/Out black-about.png'

function AboutPics() {
  return (
       <div className='about-pics'>
        <div className='p-logo'>
            <div className='back-logo'><img src={img1} alt="" /></div>
            <div className='logo'><img src={img2} alt="" /></div>
        </div>
        <div className='p-logo'>
          <div className='back-logo'></div>
          <div className='logo1'><img src={img3} alt="" /></div>
        </div>
        <div className='p-logo'>
          <div className='back-logo'></div>
          <div className='logo'><img src={img4} alt="" /></div>
        </div>
        <div className='p-logo'>
          <div className='back-logo'></div>
          <div className='logo'><img src={img5} alt="" /></div>
        </div>

    </div>
    
  )
}

export default AboutPics