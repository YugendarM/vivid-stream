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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SampleComponent/>   */}

      <BrowserRouter>

        <NavbarComponent/>
        <Routes>
          <Route exact path='/' element={<HomePageComponent/>}/>
          <Route exact path='/search' element={<SearchPageComponent/>}/>
          <Route exact path='/collections' element={<CollectionPageComponent/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
