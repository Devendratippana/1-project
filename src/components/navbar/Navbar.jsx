import React, { useState } from 'react'
import "./navbar.css"

const Navbar = () => {
    const [isMenuClick,setisMenuClick] = useState(false)
    const viewlist = ()=>{
        setisMenuClick(!isMenuClick)
    }
    console.log(isMenuClick);
    
    const addClass= isMenuClick ? "": "hide"
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
            <div className='menu-section' onClick={viewlist}> 
                <img className='menu' src="/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="menu-bar"/>
            </div>
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
     <div className={`menu-list ${addClass}`} >
                <li>MENU</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>RATINGS</li>
            </div>
    </>
   
  )
}

export default Navbar
