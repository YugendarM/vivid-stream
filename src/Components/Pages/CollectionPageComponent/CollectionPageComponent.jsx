import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoCardComponent from '../../VideoCardComponent/VideoCardComponent';
import { useQuery } from 'react-query';
import PageSkeletonComponent from '../../PageSkeletonComponent/PageSkeletonComponent';
import { MdOutlineMenu } from "react-icons/md";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";




const CollectionPageComponent = () => {

    const API_KEY = "UBCvzgCVRFOeETcfI4ByMAZcpWaNaI1hLhnbQ7VF4GuTRCUcbwB2iII5"

    // const [collectionVideoData, setCollectionVideoData] = useState([]);
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("common")
    const [menuBar, setMenuBar] = useState(false)


    // useEffect(() => {
    //     getCollectionVideoData();
    // },[query, page])
    
    const getCollectionVideoData = async ({queryKey}) => {
        const response = await axios.get(`https://api.pexels.com/v1/videos/search/?page=${queryKey[2]}&per_page=80&query=${queryKey[1]}`,{
            headers:{
                 Authorization: API_KEY

            }
        })
        console.log(response.data);
        // setCollectionVideoData(response.data.videos); 
        return response.data
        
    }

    const {data, isLoading, isError, isPreviousData} = useQuery(["CollectionVideoData",query,page], getCollectionVideoData, {
        keepPreviousData: true
    })

    if(isLoading){
        return <div className='h-[100vh] w-screen'><PageSkeletonComponent/></div>
    }

    if(isError){
        return <div>Error...</div>
    }

    const handleClick = (event) => {
        const selected = event.target.id;
        console.log(selected);
        setQuery(selected);
        setPage(1)
    }

    const toggleMenuBar = () => {
        setMenuBar((prev) => !prev)
    }

  return (
    <React.Fragment>

        <main className='md:flex md:gap-3'>
            <aside className='hidden md:block md:w-1/4 lg:w-1/6  '>
                <div className='px-3'>
                    <h1 className=' py-3 text-xl text-gray-500 font-light'>Collections</h1>
                    <div className='h-0.5 bg-gray-100'></div>
                </div>
                <ul className='py-5'>
                    <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'trending'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='trending' onClick={handleClick}>Trending</button> </li>
                    <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'games'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='games' onClick={handleClick}>Games</button> </li>
                    <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'food'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='food' onClick={handleClick}>Food</button> </li>
                    <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'scitific'? "bg-gray-100 text-black": "bg-transparent  text-gray-500"}`} id='scientific' onClick={handleClick}>Scientific</button> </li>
                    <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'nature'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='nature' onClick={handleClick}>Nature</button> </li>
                    <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'aesthetic'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='aesthetic' onClick={handleClick}>Aesthetic</button> </li>
                    <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'colors'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='colors' onClick={handleClick}>Colors</button> </li>
                </ul>
            </aside>


            <div className='lg:w-5/6 md:w-3/4'>

                <button onClick={toggleMenuBar} className='md:hidden text-4xl px-5'><MdOutlineMenu /></button>
                <div className={`md:w-1/4 lg:w-1/6 ${menuBar?"block":"hidden"}`}>
                    <div className='px-3'>
                        <h1 className=' py-3 text-xl text-gray-500 font-light'>Collections</h1>
                        <div className='h-0.5 bg-gray-100'></div>
                    </div>
                    <ul className='py-5'>
                        <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'trending'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='trending' onClick={handleClick}>Trending</button> </li>
                        <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'games'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='games' onClick={handleClick}>Games</button> </li>
                        <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'food'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='food' onClick={handleClick}>Food</button> </li>
                        <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'scitific'? "bg-gray-100 text-black": "bg-transparent  text-gray-500"}`} id='scientific' onClick={handleClick}>Scientific</button> </li>
                        <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'nature'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='nature' onClick={handleClick}>Nature</button> </li>
                        <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'aesthetic'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='aesthetic' onClick={handleClick}>Aesthetic</button> </li>
                        <li> <button className={`text-md py-3 px-3 w-full  text-left hover:bg-gray-100 hover:text-black ${query === 'colors'? "bg-gray-100 text-black": "bg-transparent text-gray-500"}`} id='colors' onClick={handleClick}>Colors</button> </li>
                    </ul>
                </div>

                <div className='px-5 md:px-0 columns-1 md:columns-2 lg:columns-3 gap-5 w-full space-x-5 pb-28'>
                {
                    data.videos && data.videos.map((video) => (
                        <VideoCardComponent key={video.id}  video={video}/>
                    ))
                }
                </div>

                <div className='flex w-full justify-center items-center gap-5 pb-10'>
                    <button className='text-2xl bg-vivid-primaryBlue rounded-md px-3 py-3 text-white disabled:bg-gray-200 disabled:text-gray-400' disabled= {page === 1} onClick={() => setPage((prev) => prev-1)}><FaChevronLeft /></button>
                    <p className='text-2xl font-semibold'>{page}</p>
                    <button className='text-2xl bg-vivid-primaryBlue rounded-md px-3 py-3 text-white disabled:bg-gray-200 disabled:text-gray-400' disabled= {isPreviousData || !data.next_page} onClick={() => setPage((prev) => prev+1)}><FaChevronRight /></button>
                </div>
            </div>



        </main>


    </React.Fragment>
  )
}

export default CollectionPageComponent
