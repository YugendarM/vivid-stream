import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";


const VideoCardComponent = ({video}) => {
  return (
    <Link to={`/video/${video.id}` }>
      <div className='overflow-hidden'>
        <div className='relative hover:scale-110 transform ease-in-out  duration-500 '>
          <div className='rounded-full bg-opacity-80 bg-black w-10 h-10 flex justify-center items-center absolute top-4 left-4 z-30'>
            <FaPlayCircle className='text-xl text-white '/>
          </div>
          <div className=''>
            <img src={video.image}/>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCardComponent
