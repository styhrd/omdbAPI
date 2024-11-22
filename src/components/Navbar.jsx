import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            <Link to={'/movies'}> <button>to Movies</button></Link>
            
           
        </div>
  )
}

export default Navbar