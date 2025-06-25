import React from 'react'
import './videopage.css'

import ToggleSwitch from '../toggle/toggle'
import VidalyticsEmbed from '../../emdedVideo'

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
                <h2>Transform Your Future With AI-Powered Income</h2>
                <br />
                <p>join thousands who are already using AI to create reliable income streams</p>
                <br />
            </div>
            <div className='video-item'>
            <VidalyticsEmbed/>
            <br />
            <div className='toggle-btn'>
                <br />
                <h3>Click to Turn on The AI Machine &#128071;</h3>
                <br />
                <div className='toggle-item'><ToggleSwitch/></div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Videopage
