import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between md:justify-normal gap-10 p-4 fixed top-0 left-0 right-0 z-40 bg-black text-white'>
        <div>Pokedex</div>
        <ul className='flex gap-5'>
            <li>
                <Link to={'/home'}>Home</Link>
            </li>
            <li>
                <Link to={'/types'}>Types</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar