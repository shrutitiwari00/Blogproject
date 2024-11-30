import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Bollywood from './Components/Bollywood'
import Technology from './Components/Technology'
import Hollywood from './Components/Hollywood'
import Fitness from './Components/Fitness'
import Food from './Components/Food'
import Categorydetail from './Components/Categorydetail'
// import SearchResults from './Components/SearchResults'

const Routerfile = () => {
  return (
   <>
     <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bollywood' element={<Bollywood/>}/>
            <Route path='/technology' element={<Technology/>}/>
            <Route path='/hollywood' element={<Hollywood/>}/>
            <Route path='/fitness' element={<Fitness/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/detail/:id' element={<Categorydetail/>}></Route>
            {/* <Route path="/search/:searchText" element={<SearchResults/>}></Route> */}
        </Routes>
     </Router>
   </>
  )
}

export default Routerfile