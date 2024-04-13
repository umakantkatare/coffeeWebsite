import './App.css'

import { useState } from 'react'
import {Outlet} from 'react-router-dom'

import viteLogo from '/vite.svg'

import reactLogo from './assets/react.svg'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'

function App() {

  return (
    <>
     <Header/>
     <Home/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
