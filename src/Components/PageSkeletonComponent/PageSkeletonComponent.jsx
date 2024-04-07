import React from 'react'

const PageSkeletonComponent = () => {
  return (
        <div className='columns-3 gap-5 space-y-5 h-screen px-24'>
            <div className='bg-gray-300 animate-pulse h-80 w-[400px]'></div>
            <div className='bg-gray-300 animate-pulse h-60 w-[400px]'></div>
            <div className='bg-gray-300 animate-pulse h-60 w-[400px]'></div>
            <div className='bg-gray-300 animate-pulse h-92 w-[400px]'></div>
            <div className='bg-gray-300 animate-pulse h-60 w-[400px]'></div>
            <div className='bg-gray-300 animate-pulse h-60 w-[400px]'></div>
            <div className='bg-gray-300 animate-pulse h-92 w-[400px]'></div>
        </div>
  )
}

export default PageSkeletonComponent
