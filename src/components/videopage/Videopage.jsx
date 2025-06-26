import React from 'react'
import './videopage.css'
import ToggleSwitch from '../toggle/toggle'

import ResponsiveVideo from '../../ResposiveVideo'

const Videopage = () => {
  return (
    <div className='video-container'>
        <div className='left-part'>
            <div className='image-container'>
                <img className='ai-img' src="/AI CREATORS CASHFLOW MACHINE.png" alt="ai-image"/>
            </div>
            <div className='reviews'>
                <div className='review-card'>
                        <div>
                            <img src="/review-img.jpg" className='img' alt="image"/>
                        </div>
                    <div className='stars-container'>
                    <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                     <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                      <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                       <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                        <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                        <span>5/5</span>
                        <div>
                            <p>I was skeptical at first, but after implementing this system, I'm generating $3,000+ monthly on autopilot!</p>
                        </div>
                    </div>
                </div>

                 <div className='review-card'>
                        <div>
                            <img src="/images.jpg" className='img' alt="image"/>
                        </div>
                    <div className='stars-container'>
                    <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                     <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                      <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                       <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                        <img className='star' src="/star_rate_38dp_FFFF55_FILL1_wght400_GRAD0_opsz40.svg"/>
                        <span>5/5</span>
                        <div>
                            <p>I was skeptical at first, but after implementing this system, I'm generating $3,000+ monthly on autopilot!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='right-part'>
            <div className='title-container'>
                <br />
                <h1>Making Money On Autopilot 🤯 <br />
Machine Works For You</h1>
                <br />
                <p>AI Machines Are Unlocking Effortless  Income Like Never Before. With Just a Few Clicks, Everyday People Are Tapping Into Powerful AI Tool that Generates Profit 24x7.</p>
                <br />
            </div>
            <div className='video-item'>
            <ResponsiveVideo/>
            <br />
            <div className='toggle-btn'>
                <br />
                <h3>Switch on The AI Machine &#128071;</h3>
                <br />
                <div className='toggle-item'><ToggleSwitch/></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Videopage
