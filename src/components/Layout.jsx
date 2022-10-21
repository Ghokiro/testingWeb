import {useState} from 'react'
import { Outlet, Link, useLocation } from "react-router-dom"
import logo from "./../images/logo/logo70.png"
import "./../styles/animation.css"
import volume from "./../images/volume.png"
import mute from "./../images/mute.png"



function Layout() {

  

  return (
    <div className='min-h-screen'>
      <header className='py-5 px-10 bg-gradient-to-tr flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-between'>
        <div 
          className='flex items-center gap-3'
        > 
          <img src={logo} alt="logo" width={50} height={50} />
         
          <h1
            className='font-black text-center text-3xl text-white'
          >WebSite</h1>
        </div>

        <nav className='flex space-x-6'>
          <Link 
            to="/"
            className='text-white uppercase font-bold 
              hover:text-gray-100 hover:scale-110 transition-all'
          >Inicio
          </Link>
          <Link 
            to="/sobre-mi"
            className='text-white uppercase font-bold
             hover:text-gray-100 hover:scale-110 transition-all'
          >Sobre Mi
          </Link>
          <Link 
            to="/contacto"
            className='text-white uppercase font-bold
             hover:text-gray-100 hover:scale-110 transition-all'
          >Contacto
          </Link>
        </nav>
      </header>

      <main className='mx-auto '
      >
        <div>
          <Outlet />

        </div>
      </main>
    </div>
  )
}

export default Layout