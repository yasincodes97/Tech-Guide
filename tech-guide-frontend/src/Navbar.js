import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li> <Link to="/">Basics of Computer Science</Link> </li>
        <li> <Link to="/python---basics">Web Development</Link> </li>
  {/*      <li><Link to="/web-dev-basics">Web Development Basics</Link> </li> */}
        <li> <Link to="/advanced-concepts">Advanced Concepts</Link> </li>
        <li> <Link to="/advanced-concepts">Approach to Software Development </Link></li>
        <li> <Link to="/exercises">Frameworks & Libraries </Link> </li>
      </ul>
    </nav> 
  );
}

export default Navbar;
