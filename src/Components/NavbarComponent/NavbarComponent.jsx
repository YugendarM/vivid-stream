import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/logoName.png"

const NavbarComponent = () => {

  const location = useLocation()
  const route = location.pathname
  console.log(route);
  
  return (
    <div className='w-full md:flex justify-between items-center md:px-5 md:py-1 md:pb-5 sticky top-0 z-30 bg-white'>

      <div className='logo w-1/3 pl-6'>
        <Link to={"/"}>
          <img src={logo} className='h-20'/>
        </Link>
      </div>
      <ul className=' flex justify-around items-center lg:px-5 py-4 md:py-0 md:w-1/3'>
        <li className={`text-md md:text-lg lg:text-xl ${route === "/" && "bg-vivid-primaryBlue rounded-full px-4 py-2 text-white"}`}><Link to={"/"}>Home</Link></li>
        <li className={`text-md md:text-lg lg:text-xl ${route === "/collections" && "bg-vivid-primaryBlue rounded-full px-4 py-2 text-white"}`}><Link to={"/collections"}>Collections</Link></li>
        <li className={`text-md md:text-lg lg:text-xl ${route === "/search" && "bg-vivid-primaryBlue rounded-full px-4 py-2 text-white"}`}><Link to={"/search"}>Search</Link></li>

      </ul>
    </div>
  )
}

export default NavbarComponent
