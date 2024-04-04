import axios from 'axios';
import React, { useEffect, useState } from 'react'
import VideoCardComponent from '../../VideoCardComponent/VideoCardComponent';
import { useQuery } from 'react-query';

const CollectionPageComponent = () => {

    const API_KEY = "UBCvzgCVRFOeETcfI4ByMAZcpWaNaI1hLhnbQ7VF4GuTRCUcbwB2iII5"

    // const [collectionVideoData, setCollectionVideoData] = useState([]);
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("common")


    // useEffect(() => {
    //     getCollectionVideoData();
    // },[query, page])
    
    const getCollectionVideoData = async ({queryKey}) => {
        const response = await axios.get(`https://api.pexels.com/v1/videos/search/?page=${page}&per_page=40&query=${queryKey[1]}`,{
            headers:{
                 Authorization: API_KEY

            }
        })
        console.log(response.data.videos);
        // setCollectionVideoData(response.data.videos); 
        return response.data.videos
        
    }

    const {data, isLoading, isError, isPreviousData} = useQuery(["CollectionVideoData",query], getCollectionVideoData, {
        keepPreviousData: true
    })

    if(isLoading){
        return <div>Loading...</div>
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

  return (
    <React.Fragment>

        <main className='flex'>
            <aside>

                <h1>selected query:{query}</h1>
                <ul>
                    <li> <button id='trending' onClick={handleClick}>Trending</button> </li>
                    <li> <button id='games' onClick={handleClick}>Games</button> </li>
                    <li> <button id='food' onClick={handleClick}>Food</button> </li>
                    <li> <button id='nature' onClick={handleClick}>Nature</button> </li>
                                      
                    
                </ul>
            </aside>


            <div >
                <div className='columns-4 gap-5 w-[1200px] mx-auto space-x-5 pb-28'>
                {
                    data && data.map((video) => (
                        <VideoCardComponent key={video.id}  video={video}/>
                    ))
                }
                </div>

                <div>
                    <button disabled= {page === 1} onClick={() => setPage((prev) => prev-1)}>Previous Page</button>
                    <p>{page}</p>
                    <button disabled={!data.next_page} onClick={() => setPage((prev) => prev+1)}>Next Page</button>
                </div>
            </div>



        </main>


    </React.Fragment>
  )
}

export default CollectionPageComponent
