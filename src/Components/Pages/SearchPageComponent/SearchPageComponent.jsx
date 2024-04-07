import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoCardComponent from '../../VideoCardComponent/VideoCardComponent';

import { useQuery } from 'react-query';
import PageSkeletonComponent from '../../PageSkeletonComponent/PageSkeletonComponent';

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";



const SearchPageComponent = () => {

  const API_KEY = "UBCvzgCVRFOeETcfI4ByMAZcpWaNaI1hLhnbQ7VF4GuTRCUcbwB2iII5"

  const [query, setQuery] = useState("hope");
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   getSearchVideoData();
  // },[page])

  const getSearchVideoData = async ({queryKey}) => {
    if(queryKey[1] === ""){
      queryKey[1] = "common"
    }
    const response = await axios.get(`https://api.pexels.com/v1/videos/search/?page=${queryKey[2]}&per_page=80&query=${queryKey[1]}`,{
      headers:{
        Authorization: API_KEY
      }
    })
    console.log(response.data);
    // setSearchVideoData(response.data);
    return response.data
  }

  const {data, isLoading, isError, isPreviousData} = useQuery(["searchVideoData", query, page], getSearchVideoData, {
    keepPreviousData:true
  })
  

  if(isLoading){
    return <PageSkeletonComponent/>
  }
  if(isError){
    return <div>Error</div>
  }

  return (
   <React.Fragment>

      <div className='flex w-full justify-center items-center gap-4'>
   
        <input className='border-2 border-gray-200 rounded-full px-3 py-2 w-1/5 focus:outline-none' type='text' onChange={(event) => {setQuery(event.target.value);  setPage(1)}}  placeholder='Enter for videos' />
        <button className='bg-vivid-primaryBlue text-white rounded-full px-5 py-2' onClick={getSearchVideoData}>Search</button>
      </div>


      <div className='py-10'>
        {
          data && 
          <div>
            {/* <p>{data.length} results found for search "{query}"</p> */}
            <div className='columns-3 gap-5 w-[1200px] mx-auto space-x-5 pb-28'>
            {
                data.videos && data.videos.map((video) => (
                    <VideoCardComponent key={video.id}  video={video}/>
                ))
            }
            
          </div>
          </div>
        }

        <div className='flex w-full justify-center items-center gap-5'>
            <button className='text-2xl bg-vivid-primaryBlue rounded-md px-3 py-3 text-white disabled:bg-gray-200 disabled:text-gray-400' disabled= {page === 1} onClick={() => setPage((prev) => prev-1)}><FaChevronLeft /></button>
            <p className='text-2xl font-semibold'>{page}</p>
            <button className='text-2xl bg-vivid-primaryBlue rounded-md px-3 py-3 text-white disabled:bg-gray-200 disabled:text-gray-400' disabled= {isPreviousData || !data.next_page} onClick={() => setPage((prev) => prev+1)}><FaChevronRight /></button>
        </div>
      </div>

   </React.Fragment>
  )
}

export default SearchPageComponent
