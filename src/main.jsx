import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import  { About, Contact, Menu, Products } from './components/Index.js'

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>,
    <Route path='/contact' element={<Contact/>}/>,
    <Route path='/about' element={<About/>}/>,
    <Route path='/products' element={<Products/>}/>,
    <Route path='/menu' element={<Menu/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
