import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from './components/Layout'
import Index from './pages/Index'
import SobreMi from './pages/SobreMi'
import Contacto, {action} from './pages/Contacto'


const router = createBrowserRouter( [
  {
    path: "/",
    element: <Layout />,
    
    children: [
      {
        index: true,
        element: <Index />,
   
      },
      {
        path: "/sobre-mi",
        element: <SobreMi/>
      },
      {
        path:"/contacto",
        element: <Contacto />,
        action: action
      }
    ]
    
  }
] )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={router}
    />
  </React.StrictMode>
)
