import React, { Fragment } from 'react'
import { AiOutlineMenu} from 'react-icons/ai'
import {BsPersonCircle } from 'react-icons/bs'
import './Main.css'

export const Main = () => {
  return (
  <Fragment>
    <nav className="Main">
      <div className='Nav'>
        <div className="Nav-Menu">
            <AiOutlineMenu className='menu-icon' size={20} style={{color: '#333'}}/>
            <p>Menu</p>
        </div> 
        <div className="Link">
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
         <div className="SideDrawer"><BsPersonCircle className='SideDrawer-icon' size={100} style={{color: '#333'}}/>
    <div className="p">
        
            <p className='Nom-Center'>Nom</p>
            <p>Activite Journaliere </p>
            <p>Activite Anuelle</p>
            <p>Activete arrive en terme</p>
         </div>
    </div>

    </div>
  </nav>
  </Fragment>

  )

}
