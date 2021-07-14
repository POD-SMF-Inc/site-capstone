import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar( { user, handleLogout }) {
  const isAuthenticated = Boolean(user?.email)

  return (
    <div className="Navbar">
      <div>
        <button className="home-link pull-left"><Link to='/'>Home</Link></button>
        <Link  to='/profile' >Profile</Link>
        <Link to='/favorites'>Favorites</Link>
        <Link to='/planner' >Planner</Link>
        {isAuthenticated ? 
        <button className="logout-link" onClick={handleLogout}>Logout</button> : 
        <>
        <button className="login-link">< Link to="/login">Login</Link></button>
        <button className="register-btn">< Link to="/register">Register</Link></button>
        </> 
        }
        
        
      </div>
    </div>
  )
}