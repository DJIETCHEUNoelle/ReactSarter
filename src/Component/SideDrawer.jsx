import React from 'react'
import './SideDrawer.css'
import {BsPersonCircle } from 'react-icons/bs'

const SideDrawer = () => {
  return (
    <div className='SideDrawer'>
        <div className="p">
        <BsPersonCircle className='SideDrawer-icon' size={100} style={{color: '#333'}}/>
            <p className='Nom-Center'>Nom</p>
            <p>Activite Journaliere </p>
            <p>Activite Anuelle</p>
            <p>Activete arrive en terme</p>
         </div>
</div>
  )
}

export default SideDrawer
