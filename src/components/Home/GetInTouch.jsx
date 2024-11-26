import React from 'react'
import img1 from '../../assets/studio green.png'
import img2 from '../../assets/studio green logo.png'
import img3 from '../../assets/Norto logo.png'
import img4 from '../../assets/points one logo.png'
import img5 from '../../assets/Out of the sans logo.png'
import logo1 from '../../assets/Norto.png'
import logo2 from '../../assets/points one.png'
import logo3 from '../../assets/out of the sand box.png'

function GetInTouch() {
  return (
    <div className='about-pics'>
        <div className='p-logo'>
            <div className='back-logo'><img src={img1} alt="" /></div>
            <div className='logo'><img src={img2} alt="" /></div>
        </div>
        <div className='p-logo'>
          <div className='back-logo'><img src={logo1} alt="" /></div>
          <div className='logo1'><img src={img3} alt="" /></div>
        </div>
        <div className='p-logo'>
          <div className='back-logo'><img src={logo2} alt="" /></div>
          <div className='logo'><img src={img4} alt="" /></div>
        </div>
        <div className='p-logo'>
          <div className='back-logo'><img src={logo3} alt="" /></div>
          <div className='logo'><img src={img5} alt="" /></div>
        </div>

    </div>
  )
}

export default GetInTouch