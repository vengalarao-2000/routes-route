import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Cart from './components/Cart'
import NavBar from './components/NavBar'
import Users from './components/Users'
import SingleUserPage from './components/SingleUserPage'

function App() {

  return (
    <>

      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<SingleUserPage/>}/>
      </Routes>
    </>

  )
}

export default App
