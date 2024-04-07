import React from 'react'

import landerVideo from "../../../assets/videos/landerVideo.mp4"
import { Link } from 'react-router-dom'

const HomePageComponent = () => {
  return (
    <main className='h-[80vh] w-screen flex items-center px-20'>
      <div className='w-2/5 flex flex-col gap-5 items-start'>
        <h1 className='text-6xl font-bold'>Discover a World of Video Content</h1>
        <h4 className='text-lg text-gray-600'>From Classics to Hidden Gems, We've Got You Covered. Checkout our collections to get into the vivid experience our creators have for you.</h4>
        <Link to={"/collections"} className='bg-vivid-primaryBlue px-5 py-3 text-white rounded-md'>Browse Collection</Link>
      </div>
      <div className='w-3/5 relative flex justify-center items-center'>
        <div className='rounded bg-gradient-to-r from-vivid-secondaryBlue to-vivid-primaryPink h-[360px] w-[640px] absolute top-[-220px]'></div>
        <div className='absolute top-[-150px] left-[160px] rounded'>
          <video autoPlay muted className='rounded' loop>
            <source src={landerVideo}/>
          </video>
        </div>
      </div>
    </main>
  )
}

export default HomePageComponent
