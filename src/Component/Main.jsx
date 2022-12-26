import React, { Fragment } from 'react'
import { AiOutlineMenu} from 'react-icons/ai'
import {BsPersonCircle } from 'react-icons/bs'
import './Main.css'

export const Main = () => {
  return (
  <Fragment>
    <div className="Main">
      <nav className='Nav'>
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
    </nav>
    
    <div className="SideDrawer"><BsPersonCircle className='SideDrawer-icon' size={100} style={{color: '#333'}}/>
    <div className="p">
        
            <p className='Nom-Center'>Nom</p>
            <p>Activite Journaliere </p>
            <p>Activite Anuelle</p>
            <p>Activete arrive en terme</p>
         </div>
    </div>
    <div className="Corq">
        <div>
        <h1 className='text-center mt-3'>ACTIVITE JOURNALIERE</h1>
        </div>
        <form className='mb-3'>
            <label htmlFor='todo' 
            className='form-label mt-3'>
            </label>
            <input

            type='text'
            className='form-control' id='todo'
            />
            <button className="mt-2 btn btn-primary d-block">
            Envoyer
            </button>
            </form>
            <div>
             <h2>Liste des taches a effectuer:</h2>
        </div>
         <ul className="list-group">
               
            </ul>
        
    </div>
    <div className="foter">
        Tout droit reserve
    </div>
</div>
  </Fragment>

  )

}
