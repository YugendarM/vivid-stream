import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/search"}>Search</Link></li>
        <li><Link to={"/collections"}>Collections</Link></li>
      </ul>
    </div>
  )
}

export default NavbarComponent
