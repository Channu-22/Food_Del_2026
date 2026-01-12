import React from 'react'
import "./App.css"
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/Sidebar/SideBar'

function App() {
  return (
    <div>
      <NavBar/>
      <hr />
      <div className="app-content">
        <SideBar className="flex"/>
      </div>
    </div>
  )
}

export default App