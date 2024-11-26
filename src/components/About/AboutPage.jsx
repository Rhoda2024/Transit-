import React from 'react'
import SectionProps from '../Reusable/SectionProps'
import img from '../../assets/about-heroSection.png'
import LogisticsServices from '../Reusable/LogisticsServices'
import ExpertTeam from '../Reusable/ExpertTeam'
import AboutOurCompany from './AboutOurCompany'
import AboutOurBestPricing from './AboutOurBestPricing'
import Testimonials from '../Reusable/Testimonials'
import AboutPics from './AboutPics'
import FqaQuestions from './FqaQuestions'

function AboutPage() {
  return (
    <div>
      <SectionProps
      img={img}
      height={"50vh"}
      p='About Us'
      p1='About Our Logistics'
      />
    <AboutOurCompany/>
    <LogisticsServices/>
    <ExpertTeam/>
    <Testimonials/>
    <AboutOurBestPricing/>
    <FqaQuestions/>
    <AboutPics/>
    </div>
  )
}

export default AboutPage