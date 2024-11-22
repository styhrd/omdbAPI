import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        
        <div>
            <Link to={'/'}> <button>to Home</button></Link>
            <Link to={'/movies'}> <button>to Movies</button></Link>
            <Link to={'/series'}> <button>to Series</button></Link>
           
        </div>
  )
}

export default Navbar