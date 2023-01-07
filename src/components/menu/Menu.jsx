import React from 'react'
import "./menu.scss"

const Menu = ({open, setOpen}) => {
  return (/*dont know but menu ke bad space dena hoga*/
    <div className={"menu " + (open && "active")}> 
      <ul>
        <li onClick={()=>setOpen(!open)}>
            <a href="#intro">HOME</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#works">WORKS</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#testimonials">TESTIMONIALS</a>
        </li>
        <li onClick={()=>setOpen(!open)}>
            <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
