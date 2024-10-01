import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return ( 
    <nav>
      <ul>  {   /* to Attribut = URL 
                   referenzieren die definierten Routen                       
                                          */   }
        
        <li> <Link to="webdev">Web Development</Link> </li>
        <li> <Link to="advanced">Advanced Concepts</Link> </li>
        <li> <Link to="exercises">Exercises</Link></li>
        <li> <Link to="frameworks">Frameworks & Libraries </Link> </li>
      </ul>
    </nav>
  );
}

export default Navbar
  