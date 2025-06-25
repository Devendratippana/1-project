import React from 'react'
import "./reviews.css"

const Reviews = () => {
  return (
    <div className='success-container'>
        <h3>SUCCESS STORIES</h3>
    <div className='review-container'>
      <div className='success-card'>
        <div>
            <img src="/profile-1.webp" alt="Michael S"/>
        </div>
        <div>
            <h5>Michael S</h5>
            <p>Real estate Agent</p>
        </div>
      </div>
      <div className='success-card'>
        <div>
            <img src="/profile-girl-1.jpg" alt="Sarah L"/>
        </div>
        <div>
            <h5>Sarah L</h5>
            <p>Digital Marketer</p>
        </div>
      </div>
      <div className='success-card'>
        <div>
            <img src="/profile2.jpg" alt="David"/>
        </div>
        <div>
            <h5>David R</h5>
            <p>Teacher</p>
        </div>
      </div>
      <div className='success-card'>
        <div>
            <img src="/profile-girl-2.jpg" alt="jennifer"/>
        </div>
        <div>
            <h5>Jennifer M.</h5>
            <p>Personal Secretary</p>
        </div>
      </div>
      <div className='helen success-card'>
        <div>
            <img src="/profile-girl-3.jpg" alt="Helen"/>
        </div>
        <div>
            <h5>Helen</h5>
            <p>Real estate agent</p>
        </div>
      </div>
    </div>   
    </div>
  )
}

export default Reviews
