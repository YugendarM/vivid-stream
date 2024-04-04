import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div>

      <div className='logo'>
        <Link to={"/"}>
          <span className='text-green-500 font-bold'>Vivi</span>
          <span className='text-blue-500 font-bold'>d</span>
          <span className='text-green-500 font-bold'>St</span>
          <span className='text-blue-500 font-bold'>ream</span>
        </Link>
      </div>
      <ul className='flex justify-between'>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/search"}>Search</Link></li>
        <li><Link to={"/collections"}>Collections</Link></li>
      </ul>
    </div>
  )
}

export default NavbarComponent
