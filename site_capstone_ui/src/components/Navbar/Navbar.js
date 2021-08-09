import { Link } from 'react-router-dom'
import './Navbar.css'
import home from "../../assets/Group12.png";


export default function Navbar( { user, handleLogout }) {
  const isAuthenticated = Boolean(user?.email)
  
  return (
    <div className="Navbar">
      <div class="navbar-start">
      <div class="navbar-brand">
           <a  href="/">
               <img className="homelogo"
               src={home}
               alt="logo_picture" width="120" height="60"></img>
           </a>
           </div>
         </div>
      <div className="navbar-end">
        <div class="navbar-item">
            {
                user?.email === undefined || user === undefined? 
                //Only shows Home and login and register
                //(console.log("yep its undefined")) 
                <>
                    <a href="/login" class="button ">
                      Login
                    </a>
                    <a href="/register" class="button ">
                    <strong>Sign Up</strong>
                    </a>
                </>
       
                :
                //Shows everything
                <>
                {/* <a href="/profile" class="navbar-item">
                Profile
                </a>
                <a href=" /favorites" class="navbar-item">
                  Favorites
                </a> */}

                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/" class="navbar-link">
                      Account
                    </a>

                  <div class="navbar-dropdown">
                      <a href="/profile" class="navbar-item ">
                         Profile
                       </a>
                      <a href ="/favorites" class="navbar-item ">
                         Favorites
                       </a>
                       <a href ="/list" class="navbar-item ">
                         Shopping List
                       </a>
                  </div>
                </div>


                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/" class="navbar-link">
                      Planner
                    </a>

                  <div class="navbar-dropdown">
                      <a href="/planner" class="navbar-item ">
                         Meal Plan Generator
                       </a>
                      <a href ="/weeklyp" class="navbar-item ">
                         Create Weekly Planner
                       </a>
                  </div>
                </div>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a href="/" class="navbar-link">
                      Explore
                    </a>

                  <div class="navbar-dropdown">
                      <a href="/explore" class="navbar-item ">
                         Search
                       </a>
                      <a href ="/ingredients" class="navbar-item ">
                         Find By Ingredients
                       </a>
                       <a href="/tutorials" class="navbar-item">
                        Recipe Tutorials
                      </a>
                  </div>
                </div>

                {/* <a href="/explore" class="navbar-item">
                  Explore
                </a> */}
                
                <button className="logout-link" onClick={handleLogout}>Logout</button>
                </>
                //(console.log("checknav: " ,user.email))
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
        {
        user === undefined ? 
        //Only shows Home and login and register
        (console.log("yep its undefined")) 
        :
        //Shows everything
        (console.log("checknav: " ,user.email))
      }
      
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
            <button className="logout-link" onClick={handleLogout}>Logout</button> 
            : 
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
        
      </div>*/