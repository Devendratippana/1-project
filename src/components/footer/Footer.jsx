import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-section'>
        <div className='top-part'>
            <div className='logo'>
                <img src="/memory_80dp_9B5278_FILL0_wght400_GRAD0_opsz48.svg" alt="logo" />
                <div className='text'>
                    <h3>AI Wealth Profit</h3>
                    <p>Automatical income Generation</p>
                </div>
            </div>
            <div className='legal'>
                <h3>Legal</h3>
                <p>Terms&conditions</p>
                <p>privacy  policy</p>
                <p>Earnings Disclaimer</p>
                <p>Refund Policy</p>
            </div>
            <div className='support'>
                <h3>Support</h3>
                <p>Contact us</p>
                <p>FAQ</p>
                <p>HELP Center</p>

            </div>
        </div>
        <hr/>
        <div className='bottom-part'>
            <div className='rights'>
               &#169; 2025 AI Weath Profit .All rights reserved
            </div>
            <div className='terms'>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Cookies</p>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
