import React from 'react'
import SectionProps from '../Reusable/SectionProps'
import img from '../../assets/Service-heroSection.png'
import LogisticsServices from '../Reusable/LogisticsServices'
import Testimonials from '../Reusable/Testimonials'
import ServiceHowWeWork from './ServiceHowWeWork'
import ServiceRates from './ServiceRates'

function ServicePage() {
  return (
    <div>
      <SectionProps
      img={img}
       height={"50vh"}
      p='Services'
      p1='Our Logistic Services'
      />
      <LogisticsServices/>
      <ServiceHowWeWork/>
     <Testimonials/>
     <ServiceRates/>
    </div>
  )
}

export default ServicePage