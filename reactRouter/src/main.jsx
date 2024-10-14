import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Layout from './Layout'
import {Home, About, Contact, User, NotFound} from './components/index'

import { usernameLoader } from './components/About/About'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route
        path='about' 
        element={<About />} 
        loader={usernameLoader}
      />
      <Route path='contact' element={<Contact />} />

      <Route path='user/:id' element={<User />} />

      <Route path="*" element={<NotFound />} />


    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
