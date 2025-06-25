import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <>
    <div className='nav-bar'>
        <div className='logo-section'>
            <div>
            <img src="/memory_80dp_9B5278_FILL0_wght400_GRAD0_opsz48.svg"/>
            </div>
            <div>
            <h1>AI Wealth Profit</h1>
            </div>
        </div>
        <div className="img-section">
            <div className='list-items'>
                <li>MENU</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>RATINGS</li>
            </div>
            <div>
                <button>
                    join us
                </button>
            </div>
        </div>      
    </div>
    </>
   
  )
}

export default Navbar
