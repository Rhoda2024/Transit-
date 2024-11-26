import React from 'react'
import img1 from '../../assets/HomeTransport1.png'
import img2 from '../../assets/HomeTransport2.png'
import img3 from '../../assets/HomeTransport3.png'
import img4 from '../../assets/HomeTransport4.png'
import img5 from '../../assets/HomeTransport5.png'

function HomeTransporting() {
    const transports = [
        {img:img1, name:"Liquid Transportation", post:"Premium Tankers"},
        {img:img2,name:"Packaging Solutions",post:"Warehouse Management"},
        {img:img3,name:"Contract Logistics",post:"Road Transportation"},
        {img:img4,name:"Warehouse & Distribution",post:"Large Warehouse"},
        {img:img5,name:"Specialized Transport",post:"Ocean Transports"},
    ]
  return (
    <div className='transporting'>
        <div>
            <p className='titles-header'>Transporting Acrosss The World</p>
        </div>
        <div className='transport-flex'>
            {transports.map((transport,index)=>(
               <div className='each-transport' key={index}>
                <div><img src={transport.img} alt="" /></div>
                <div className='transport-desc'>
                    <p>{transport.name}</p>
                    <p>{transport.post}</p>
                </div>
               </div> 
            ))}

        </div>
        <button className='btn'>More Work</button>
    </div>
  )
}

export default HomeTransporting