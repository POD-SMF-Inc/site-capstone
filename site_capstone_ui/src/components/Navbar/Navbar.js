import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar( { user, handleLogout }) {
  const isAuthenticated = Boolean(user?.email)

  return (
    <div className="Navbar">
      <div>
         <Link to='/' className='home-link'>Home</Link>
        <Link to='/profile'>Profile</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/planner'>Planner</Link>
        {isAuthenticated ? 
        <button className="logout-link" onClick={handleLogout}>Logout</button> : 
        <>
          <Link to='/login' className='login-link'>Login</Link>
          <Link to='/register' className='register-link'>Register</Link>
        </> 
        }
      </div>
    </div>
  )
}