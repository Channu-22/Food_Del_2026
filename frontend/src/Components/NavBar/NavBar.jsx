import React, { useState } from 'react'
import "./NavBar.css"
import { assets } from '../../assets/assets'

// tomato-text-[#ff6347]
// text-#49557e
// bg-#fff4f2

function NavBar() {
    const [menu,setMenu] = useState("home");

  return (
    <div className="navbar flex items-center justify-between py-5">
        <img src={assets.logo} alt="" className="logo w-[150px]" />
        <ul className="navabar_menu flex items-center gap-5 text-[#49557e] text-[18px]">
            <li onClick={() => setMenu("home")} className={` ${menu === "home" ? "active pb-[2px] border-b-2 border-[#49557e]" : " "} cursor-pointer  `}>home</li>
            <li onClick={() => setMenu("menu")} className={` ${menu === "menu" ? "active pb-[2px] border-b-2 border-[#49557e]" : " "} cursor-pointer  `}>menu</li>
            <li onClick={() => setMenu("mobile-app")} className={` ${menu === "mobile-app" ? "active pb-[2px] border-b-2 border-[#49557e]" : " "}  cursor-pointer `}>mobile app</li>
            <li onClick={() => setMenu("contact-us")} className={` ${menu === "contact-us" ? "active pb-[2px] border-b-2 border-[#49557e]" : " "} cursor-pointer `}>contact us</li>
        </ul>
        <div className="navbar-right flex items-center gap-10">
            <img src={assets.search_icon} alt="" className=""/>
            <div className="navbar-search-icon relative  ">
                <img src={assets.basket_icon} alt="" />
                <div className="dot absolute min-h-[10px] min-w-[10px] bg-[#ff6347] rounded-[5px] top-[-8px] right-[-8px]"></div>
            </div>
            <button className="bg-transparent text-[#49557e] px-[30px] py-[10px] rounded-full cursor-pointer hover:bg-[#fff4f2] transition-all duration-300">Sign In</button>
        </div>
    </div>
    
    
  )
}

export default NavBar