import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'






const Navbar = () => {
  return (
    <div>
    <header >
     <nav>
        <h4 className='title'>TAMILNADU TOURISM</h4>
        <ul>
        {/* <li>
          <a href ={"/"} className="nav-link text-light">Home</a> 
        </li> */}
        {/* <li><Link to="/"> Home</Link></li> */}
        {/* <li>
          <a href ={"/Places"} className="nav-link text-light">Places to Visit</a> 
        </li> */}
        <li className='nav-item'>
          <Link to={"/"} className="nav-link text-light">Home</Link>
        </li>
        <li className='nav-item'>
          <Link to={"/Places"} className="nav-link text-light">Places to Visit</Link>
        </li>

         
        
        <li>
        {/* <a href ="Best Time to Visit" className="nav-link text-light">Best Time to Visit</a>  */}
          <Link to="/Best " className="nav-link text-light">Best Time to Visit</Link> 
        </li>

         <li>
         <Link to="/Packages " className="nav-link text-light">Packages</Link> 
         </li>

         <li>
            <a href ="Destination" className="nav-link text-light">Destination</a> 
         </li>
         <li>

         <Link to="/Food " className="nav-link text-light">Food</Link> 
         </li>
         
        </ul>
      </nav>
    </header>
    
    </div>
  )
}

export default Navbar