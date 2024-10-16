import React from 'react';
import Logo from '../Assets/logo1.jpg';

const Nav = () => {

  return (
    <nav>
      <a href='/' className='logo-photo'>
        <img src={Logo} alt='logo-photo' />
      </a>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/'>About</a>
        </li>
        <li>
          <a href='/'>Services</a>
        </li>
        <li>
          <a href='/'>Menu</a>
        </li>
        <li>
          <a href='/'>Reservations</a>
        </li>
        <li>
          <a href='/'>Order online</a>
        </li>
        <li>
          <a href='/'>Login</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
