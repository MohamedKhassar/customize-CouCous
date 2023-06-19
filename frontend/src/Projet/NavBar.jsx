
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from "../hooks/useLogout";

export default function NavBar() {
const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <a name="header"></a>
    <div className='navbar'>
      <div className='navbar'>
      <Link to='/'><h3 className='logo'><img src="../image/alo.png" alt="" /></h3></Link>

      <ul className='nav-list'>
        <li>
          <Link to='/' className='link'>Home</Link>
        </li>
        <li>
          <Link to='/about' className='link'>About</Link>
        </li>
        <li>
          <Link to='/menu' className='link'>Make CousCous</Link>
        </li>
        <li>
        <Link to='/menu2' className='link'>Menu</Link>
        </li>
        <li>
          <Link to='/contact' className='link'>Contact</Link>
        </li>
        {!user ? <li>
          <Link to='/login' className='link'>login</Link>
        </li>
        : <li><nav><button className='btn' onClick={handleClick}>logout</button></nav></li>
        }

      </ul>
    </div>
      
    </div>
    </div>
  )
}

