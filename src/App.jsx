import './App.css'

import {Outlet} from 'react-router-dom'

import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'

function App() {

  return (
    <>
     <Header/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
