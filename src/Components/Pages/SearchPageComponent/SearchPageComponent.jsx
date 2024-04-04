import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoCardComponent from '../../VideoCardComponent/VideoCardComponent';

const SearchPageComponent = () => {

  const API_KEY = "UBCvzgCVRFOeETcfI4ByMAZcpWaNaI1hLhnbQ7VF4GuTRCUcbwB2iII5"

  const [searchVideoData, setSearchVideoData] = useState([]);
  const [query, setQuery] = useState("hope");
  const [page, setPage] = useState(1);

  useEffect(() => {
    getSearchVideoData();
  },[page])

  const getSearchVideoData = async () => {
    const response = await axios.get(`https://api.pexels.com/v1/videos/search/?page=${page}&per_page=15&query=${query}`,{
      headers:{
        Authorization: API_KEY
      }
    })
    console.log(response.data);
    setSearchVideoData(response.data);
  }
  return (
   <React.Fragment>
      <h1>Search</h1>

      <input type='text' onChange={(event) => {setQuery(event.target.value)}}  placeholder='Enter the query' />
      <button onClick={getSearchVideoData}>Search</button>



      <div>
        <div className='columns-4 gap-5 w-[1200px] mx-auto space-x-5 pb-28'>
          {
              searchVideoData.videos && searchVideoData.videos.map((video) => (
                  <VideoCardComponent key={video.id}  video={video}/>
              ))
          }
        </div>

        <div>
            <button disabled= {page === 1} onClick={() => setPage((prev) => prev-1)}>Previous Page</button>
            <p>{page}</p>
            <button disabled= {searchVideoData && searchVideoData.total_results <= 15} onClick={() => setPage((prev) => prev+1)}>Next Page</button>
        </div>
      </div>

   </React.Fragment>
  )
}

export default SearchPageComponent
