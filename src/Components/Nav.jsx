import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./logo.png"

const Nav = () => {
  return (
    <div className='navmenu'>
         <div className="logo">
             <NavLink to="/" > 
               <img src={logo} />
              </NavLink>
         </div>
         <div className="menu-bar">
            <ul>
                <li>
                <NavLink to="/" > Home </NavLink>
                </li>
                <li>
                <NavLink to="/about" > About  </NavLink>
                </li>
                <li>
                <NavLink to="/blog" > Blog  </NavLink>
                </li>
                <li>
                <NavLink to="/contact" > Contact  </NavLink>
                </li>
                <li>
                <NavLink to="/more" > More  </NavLink>
                </li>
            </ul>
             
         </div>
         <div className="enquiry-btn">
            <span>Login</span>
            <button >Contact Us</button>
         </div>
    </div>
  )
}

export default Nav