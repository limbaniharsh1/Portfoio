import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../Main'
import About from './AllDetails/About'
import Resume from './AllDetails/Resume'
import Works from './AllDetails/Works'
import Blog from './AllDetails/Blog'
import Contact from './AllDetails/Contact'
import Products from './AllDetails/Products'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}>
            <Route path='/' element={<About/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/works' element={<Works/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={<Products/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default AllRoutes
