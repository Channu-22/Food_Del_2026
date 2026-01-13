import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import SideBar from "./components/Sidebar/SideBar"
import Add from "./Pages/Add/Add"
import List from "./Pages/List/List"
import Order from "./Pages/Orders/Order"

function App() {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
