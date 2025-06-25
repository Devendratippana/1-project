import React from 'react'
import "./signup.css"

const Signup = () => {
  return (
    <div id="form-element" className='sign-up-container'>
        <div className='arrow-item'>
          <div className='arrow-text'>Unlimited Time on Free Plan
Make over $100 From Free Plan
No Card Details Required</div>
          <div class="custom-shape-divider-top-1750777592">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
        </div>
    
    <div className='second-fold'>
        <div className='form-container'>
            <form className='input-form'>
                <input type="text" placeholder='First Name'/> <br />
                <input type="text" placeholder='Last Name'/> <br />
                <input type="email" placeholder='Email Address'/> <br />
                <input type="text" placeholder='Phone Number'/> <br />
                <div>
                <button className='signup-btn' type="submit">START NOW</button>
                </div>
            </form>
        </div>
        <div className='about-us '>
          <h3>ABOUT US</h3>
         <p> About AI Wealth Profit
AI Wealth Profit is a cutting-edge platform designed to help individuals and businesses grow their financial potential using the power of artificial intelligence. By combining advanced data analytics, predictive modeling, and smart automation, we make wealth-building smarter, faster, and more accessible.

Whether you're a beginner exploring investment opportunities or a seasoned entrepreneur looking to optimize your income streams, AI Wealth Profit offers intelligent solutions tailored to your financial goals. Our AI algorithms analyze market trends, forecast opportunities, and suggest personalized strategies to help you maximize returns with minimal effort.</p>
<div className='button-element'>
  <button> Contact Us</button>
</div>
        </div>

    </div>
    </div>
  )
}

export default Signup
