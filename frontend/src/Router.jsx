import React, { Children } from "react";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OutLet from "./Components/OutLet";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder.jsx";
import StoreContextProvider from "./Context/StoreContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutLet />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        element: <PlaceOrder />,
      },
    ],
  },
]);

function Router() {
  return (
    <StoreContextProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </StoreContextProvider>
  );
}

export default Router;
