import React from 'react'
import SectionProps from '../Reusable/SectionProps'
import HomeWhatWeDo from './HomeWhatWeDo'
import img from '../../assets/homehero.png'
import ExpertTeam from '../Reusable/ExpertTeam';
import Testimonials from '../Reusable/Testimonials';
import GetInTouch from './GetInTouch';
import HomeTransporting from './HomeTransporting';
import HoemWhyUs from './HoemWhyUs';

const HomePage = ()=> {
  return (
    <div>
     <SectionProps
     img={img}
     height={"90vh"}
     p='Logistics & Supply Chain Solutions'
     p1='Your Gateway to any Destination in the World'
     p2='In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. '
     button={'Explore More'}
     />
    <HomeWhatWeDo/>
    <HoemWhyUs/>
    <HomeTransporting/>
    <Testimonials/>
    <ExpertTeam/>
    <GetInTouch/>
    </div>
  );
};

export default HomePage