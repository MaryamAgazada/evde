import React from 'react'
import { Outlet, Link } from "react-router-dom";
function Nav() {
  return (
    <div>
       <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">add</Link>
          </li>
         
          <li>
            <Link to="/basket">basket</Link>
          </li>
          <li>
            <Link to="/wishlist">wishlist</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
