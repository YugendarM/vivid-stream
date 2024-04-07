import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import defaultProfile from '../../assets/defaultProfile.jpeg'

const VideoPlayerComponent = () => {

    const API_KEY = "UBCvzgCVRFOeETcfI4ByMAZcpWaNaI1hLhnbQ7VF4GuTRCUcbwB2iII5"
    const [videoData, setVideoData] = useState({});
    const {id} = useParams()

    useEffect(() => {
        getVideoData();
    },[])

    const getVideoData = async () => {
        console.log(id);
        const response = await axios.get(`https://api.pexels.com/v1/videos/videos/${id}`,{
            headers:{
                 Authorization: API_KEY

            }
        })
        console.log(response.data);
        setVideoData(response.data)
    }

  return (
        <main className='flex flex-col justify-center items-center gap-10'>
            {
                videoData.user && 
                <div className='flex justify-between items-center w-[40vw]'>
                    <div className='flex justify-center items-center'>
                        <img src={defaultProfile} className='h-14 w-14'/>
                        <div>
                            <p className='text-md capitalize'>{videoData.user && videoData.user.name}</p>
                            <p className='text-sm text-gray-700'>{videoData.user && videoData.user.id}</p>
                        </div>
                    </div>
                    <div>
                        {videoData.user && <a href={videoData.user.url} className='bg-vivid-primaryBlue text-white rounded-md px-3 py-2 font-medium text-lg'>Browse Creator</a>}
                    </div>
                </div>
            }
            <div className='h-[500px]'>
                    {videoData.video_files && 
                    <video controls autoPlay muted className='max-h-full' preload="auto">
                        <source src={videoData.video_files[0].link} />
                    </video>
                    }
            </div>
        </main>
  )
}

export default VideoPlayerComponent
