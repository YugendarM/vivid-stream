import axios from 'axios';
import React, { useEffect, useState } from 'react'

const API_KEY = "UBCvzgCVRFOeETcfI4ByMAZcpWaNaI1hLhnbQ7VF4GuTRCUcbwB2iII5"

const SampleComponent = () => {

    const [videoData, setVideoData] = useState([]);

    // useEffect(() => {
    //     getData();
    // },[])

    // const getData = async () => {
    //     const response = await axios.get("https://api.pexels.com/videos/search?query=nature" , {
    //         headers : {
    //             Authorization: API_KEY
    //         }
    //     })

    //     setVideoData(response.data);
    //     console.log(response.data);
    // }
  return (
    <div>
      Sample
      <p className='text-4xl bg-blue-500'>testing</p>

      <video src='https://videos.pexels.com/video-files/6394054/6394054-sd_640_320_24fps.mp4' loop autoPlay="{true}"></video>
    </div>
  )
}

export default SampleComponent
