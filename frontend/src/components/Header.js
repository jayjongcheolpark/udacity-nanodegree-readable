import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({title}) => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <Link className="navbar-brand text-light" to="/">{title}</Link>
      </nav>
    </div>
  )
}

export default Header