import React from 'react'
import img1 from '../../assets/service-img.png'
import img2 from '../../assets/service-img2.png'
import icon1 from '../../assets/service-warehouse.png'
import icon2 from '../../assets/service-safety.png'
import icon3 from '../../assets/service-environment.png'
function ServiceHowWeWork() {
  return (
    <div className='service-how'>
        <div>
            <p className='titles'>Our Goodness</p>
            <p className='titles-header'>How We Works</p>
        </div>
        <div className='service-flex'>
            <div className='left-how'>
                <div className='service-img1'>
                    <img src={img1} alt="" />
                </div>
                <div className='service-img2'>
                    <img src={img2} alt="" />
                </div>
            </div>
            <div className='right-how'>
                <div className='ser'>
                    <div><img src={icon1} alt="" /></div>
                    <div>
                        <p>Warehousing Services</p>
                        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking </p>
                    </div>
                </div>
                <div className='ser'>
                    <div>
                        <img src={icon2} alt="" />
                    </div>
                    <div>
                        <p>Safety & Quality</p>
                        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking </p>
                    </div>
                </div>
                <div className='ser'>
                    <div>
                        <img src={icon3} alt="" />
                    </div>
                    <div>
                        <p>Care for Environment</p>
                        <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ServiceHowWeWork