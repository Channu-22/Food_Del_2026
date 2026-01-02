import React, { Children } from 'react'
import "./App.css"
import NavBar from './Components/NavBar/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import OutLet from './Components/OutLet'
import Home from "./Pages/Home/Home.jsx"
import Cart from "./Pages/Cart/Cart.jsx"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx"

const router = createBrowserRouter ( [
   {
      path:"/",
      element:<OutLet/>,
      children : [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/order",
          element:<PlaceOrder/>
        }
      ]
   }
])



function Router() {
  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}

export default Router