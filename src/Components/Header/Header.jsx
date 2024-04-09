import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./Header.module.scss"

function Header() {
  return (
    <div className={Style.header}> 
      <div className="container">
    <nav>
    <ul className='d-flex p-0 m-0 '>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </nav>
    </div>
    </div>
  )
}

export default Header
