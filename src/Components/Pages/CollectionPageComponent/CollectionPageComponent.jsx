import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CollectionPageComponent = () => {

    const API_KEY = "UBCvzgCVRFOeETcfI4ByMAZcpWaNaI1hLhnbQ7VF4GuTRCUcbwB2iII5"

    const [collectionVideoData, setCollectionVideoData] = useState([]);
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState("general")


    useEffect(() => {
        getCollectionVideoData();
    },[query, page])
    
    const getCollectionVideoData = async () => {
        const response = await axios.get(`https://api.pexels.com/v1/videos/search/?page=${page}&per_page=15&query=${query}`,{
            headers:{
                Authorization: API_KEY
            }
        })
        console.log(response.data.videos);
        setCollectionVideoData(response.data.videos); 
        
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


            <div>
                {
                    collectionVideoData && collectionVideoData.map((video) => (
                        <div>
                            <p>{video.id}</p>
                            <img src={video.image} className='h-20 w-20' />
                        </div>
                    ))
                }

                <div>
                    <button disabled= {page === 1} onClick={() => setPage((prev) => prev-1)}>Previous Page</button>
                    <p>{page}</p>
                    <button onClick={() => setPage((prev) => prev+1)}>Next Page</button>
                </div>
            </div>



        </main>


    </React.Fragment>
  )
}

export default CollectionPageComponent
