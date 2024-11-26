import React from 'react'

function AboutOurBestPricing() {
  const pricings =[
    {type:"Basic", price:"$39", truck:"Single Truck",insurance:"Full Insurance", rate:"500 km", time:"Real-time rate Shopping",plan:"Choose Plan"},
    {type:"Standard", price:"$59", truck:"Single Truck",insurance:"Full Insurance", rate:"500 km", time:"Real-time rate Shopping",plan:"Choose Plan"},
    {type:"Premium", price:"$89", truck:"Double Truck",insurance:"Full Insurance", rate:"Unlimited", time:"Real-time rate Shopping",plan:"Choose Plan"}
  ]
  return (
    <div className='pricing'>
      <div>
        <p className='titles'>Pricing</p>
        <p className='titles-header'>Our Best Pricing</p>
      </div>

      <div className='each-pricing'>
        {pricings.map((pricing,index)=>(
          <div className='prices' key={index}>
            <h1>{pricing.type}</h1>
            <p>{pricing.price}</p>
            <p>{pricing.truck}</p>
            <p>{pricing.insurance}</p>
            <p>{pricing.rate}</p>
            <p>{pricing.time}</p>
            <button className='btn'>{pricing.plan}</button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default AboutOurBestPricing