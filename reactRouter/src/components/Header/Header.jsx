import { text } from 'figlet'
import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
  
  return (
    <>
        <div className='h-1/6 lg:h-1/5 w-screen bg-slate-700 text-orange-500 flex justify-between items-center p-5 px-10'>
            <div>
                <Link to='/' className='flex items-center gap-2'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Orange_logo.svg/284px-Orange_logo.svg.png" alt="Logo" className='h-12' />
                    <div className='font-bold text-xl tracking-widest'> LOGO</div>
                </Link>
            </div>
            <div>
              <li className='list-none flex justify-between gap-10 lg:gap-20'>
                <ul>
                  <NavLink to='/' className={({isActive}) => `${isActive? 'text-orange-300':'text-orange-500'}`}>
                    HOME
                  </NavLink>
                </ul>
                <ul>
                  <NavLink to='about' className={({isActive}) => `${isActive? 'text-orange-300':'text-orange-500'}`}>
                    ABOUT
                  </NavLink>
                </ul>
                <ul>
                  <NavLink to='contact' className={({isActive}) => `${isActive? 'text-orange-300':'text-orange-500'}`}>
                    CONTACT US
                  </NavLink>
                </ul>
              </li>
            </div>
            <div>
              <button className='bg-orange-500 text-white py-2 px-4 rounded-lg'>
                Sign In
              </button>
            </div>
        </div>
    
    </>
  )
}

export default Header