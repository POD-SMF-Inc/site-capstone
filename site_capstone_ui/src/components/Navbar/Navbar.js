import { Link } from 'react-router-dom'
import './Navbar.css'


export default function Navbar( { user, handleLogout }) {
  const isAuthenticated = Boolean(user?.email)

  return (
    <div className="Navbar">
      <div class="navbar-start">
      <a href="/" class="navbar-item">
        Home
      </a>
      </div>
      <div class="navbar-end">
      <div class="navbar-item">
      
         <a href="/profile" class="navbar-item">
            Profile
          </a>
          <a href=" /favorites" class="navbar-item">
            Favorites
          </a>
          <a href="/planner" class="navbar-item">
            Planner
          </a>
          <a href="/explore" class="navbar-item">
            Explore
          </a>
        {isAuthenticated ? 
        <button className="logout-link" onClick={handleLogout}>Logout</button> : 
        <>
          <a href="/login" class="button ">
            Login
          </a>
          <a href="/register" class="button ">
          <strong>Sign up</strong>
          </a>
        </> 
        }
      </div>
    </div>
    </div>
  )
}

/*<div>
        <button className="home-link pull-left"><Link to='/'>Home</Link></button>
        <Link  to='/profile' >Profile</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/planner' >Planner</Link>
        <Link to='/explore'>Explore</Link>
        <Link to='/tutorials'>Tutorials</Link>
        {isAuthenticated ? 
        <button className="logout-link" onClick={handleLogout}>Logout</button> : 
        <>
        <button className="login-link">< Link to="/login">Login</Link></button>
        <button className="register-btn">< Link to="/register">Register</Link></button>
        </> 
        }
        
        
      </div>*/