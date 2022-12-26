import React from 'react'
import { Main } from './Main'

import { AiOutlineMenu } from 'react-icons/ai'
import './NavBar.css'
const NavBar = () => {
  return (
   
      <nav className='Nav'>
        <div className="Nav-menu">
          <AiOutlineMenu className='menu-icon' size={20} style={{color: '#333'}}/>
          <h1 className='menu'>
            Menu
        
          </h1>
          
        </div>
     

        <div className='Nav-links'>

          <ul className='Nav-links-ul'>
              <a  href='#'>Home</a>
              <a href='#'>Service</a>
              <a href='#'>About</a>
              <a href='#'>Contact</a>
          </ul>

        </div>
        <div className='Nav-date'>

            date du jour

        </div>

        
      </nav>
          
      
  
  )
  
}

export default NavBar
