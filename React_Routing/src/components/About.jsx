import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <nav>
        <Link to="team">Team</Link>
        <Link to="company">Company</Link>
      </nav>
      <Outlet /> {/* Nested routes will show here */}
    </div>
  );
};

export default About;
