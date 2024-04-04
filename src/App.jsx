import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SampleComponent from './Components/SampleComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePageComponent from './Components/Pages/HomePageComponent/HomePageComponent'
import SearchPageComponent from './Components/Pages/SearchPageComponent/SearchPageComponent'
import NavbarComponent from './Components/NavbarComponent/NavbarComponent'
import CollectionPageComponent from './Components/Pages/CollectionPageComponent/CollectionPageComponent'
import VideoPlayerComponent from './Components/VideoPlayerComponent/VideoPlayerComponent'
import CollectionRouteComponent from './Components/Routes/CollectionRouteComponent/CollectionRouteComponent'
import HomeRouteComponent from './Components/Routes/HomeRouteComponent/HomeRouteComponent'
import SearchRouteComponent from './Components/Routes/SearchRouteComponent/SearchRouteComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SampleComponent/>   */}
      {/* <VideoPlayerComponent/> */}
      {/* <VideoCardComponent/> */}
      {/* <ReactPlayer url="https://player.vimeo.com/external/342571552.hd.mp4?s=6aa6f164de3812abadff3dde86d19f7a074a8a66&profile_id=175&oauth2_token_id=57447761" controls={true} width={"100%"} height={"700px"}/> */}

      <BrowserRouter>

        <NavbarComponent/>
        <Routes>
          <Route exact path='/' element={<HomeRouteComponent/>}/>
          <Route exact path='/search' element={<SearchRouteComponent/>}/>
          <Route exact path='/collections' element={<CollectionRouteComponent/>}/>
          <Route exact path='/video/:id' element={<VideoPlayerComponent/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
