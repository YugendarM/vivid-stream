import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoCardComponent from '../../VideoCardComponent/VideoCardComponent';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

import { useQuery } from 'react-query';

const SearchPageComponent = () => {

  const API_KEY = "UBCvzgCVRFOeETcfI4ByMAZcpWaNaI1hLhnbQ7VF4GuTRCUcbwB2iII5"

  const [query, setQuery] = useState("hope");
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   getSearchVideoData();
  // },[page])

  const getSearchVideoData = async ({queryKey}) => {
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
    return <div className='h-[100vh] w-[100vh] flex justify-center items-center'>Loading</div>
  }
  if(isError){
    return <div>Error</div>
  }

  return (
   <React.Fragment>
      <h1>Search</h1>

      <input type='text' onChange={(event) => {setQuery(event.target.value)}}  placeholder='Enter the query' />
      <button onClick={getSearchVideoData}>Search</button>



      <div>
        <div className='columns-3 gap-5 w-[1200px] mx-auto space-x-5 pb-28'>
          {
              data.videos && data.videos.map((video) => (
                  <VideoCardComponent key={video.id}  video={video}/>
              ))
          }
          
        </div>

        <div>
            <button disabled= {page === 1} onClick={() => setPage((prev) => prev-1)}>Previous Page</button>
            <p>{page}</p>
            <button disabled= {!data.next_page} onClick={() => setPage((prev) => prev+1)}>Next Page</button>
        </div>
      </div>

   </React.Fragment>
  )
}

export default SearchPageComponent
