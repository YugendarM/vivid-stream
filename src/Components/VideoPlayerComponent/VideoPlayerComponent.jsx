import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';

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
    <React.Fragment>
        <h1>VideoPlayerComponent</h1>
        {/* <ReactPlayer url="https://www.pexels.com/video/a-soldier-s-general-purpose-pouch-7467778/"/> */}
       <div className='h-[400px] w-[500px]'>
            {videoData.video_files && 
            <video controls autoPlay muted className='max-h-full'>
                <source src={videoData.video_files[0].link} />
            </video>}
       </div>
    </React.Fragment>
  )
}

export default VideoPlayerComponent
