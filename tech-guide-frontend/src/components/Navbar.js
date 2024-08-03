import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/python-basics">Python Basics</Link></li>
        <li><Link to="/web-dev-basics">Web Development Basics</Link></li>
        <li><Link to="/advanced-concepts">Advanced Concepts</Link></li>
        <li><Link to="/exercises">Exercises</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
