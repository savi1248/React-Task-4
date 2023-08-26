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
          <Link to={"/Best Time to Visit"} className="nav-link text-light">Best Time to Visit</Link> 
        </li>

         <li>
            <a href ="packages" className="nav-link text-light">packages</a> 
         </li>

         <li>
            <a href ="Destination" className="nav-link text-light">Destination</a> 
         </li>
         <li>

            <a href ="Food" className="nav-link text-light">Food</a> 
         </li>
         
        </ul>
      </nav>
    </header>
    
    </div>
  )
}

export default Navbar