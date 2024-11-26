import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import img from '../../assets/fqa pics.png'
import icon2 from '../../assets/icon2.png'

function FqaQuestions() {
  return (
   <div className='background-fqa'> 
    <div className='fqa-questions'>
        <div className='right-fqa'>
            <p className='titles'>FQA</p>
            <p className='titles-header'>Frequently Asked Questions</p>
            <div className='fqa-flex'>
                <p>How can I pay for your logistics services?</p>
                <RiArrowDropDownLine size={40} color='rgba(255, 184, 43, 1)'/>

            </div>
            <p className='right-fqa-desc'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.</p>
            <div className='fqa-flex'>
                <p>What payment methods are supported?</p>
                <RiArrowDropRightLine size={40}/>
            </div>
            <div className='fqa-flex'>
                <p>What options for logistics plans are available?</p>
                <RiArrowDropRightLine size={40}/>
            </div>
            <div className='fqa-flex'>
                <p>Can i specify a delivery date when ordering?</p>
                <RiArrowDropRightLine size={40}/>
            </div>
        </div>
        <div className='left-fqa'>
            <div className='fqa-relative'>
                <img src={img} alt="" />
            </div>
            <div className='fqa-absolute'>
                <p className='titles'>Let's Talk</p>
                <p className='fqa-desc'>You need any help? get free consultation</p>
                
             <div className='call'>
                <div className='icon3'>
                     <img src={icon2} alt="" />
                </div>
                <div className='icon-text'>
                    <p>Have Any Questions</p>
                    <p>(00) 112 365 489</p>
                </div>
             </div>
              <button className='btn'>Contact Us</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default FqaQuestions