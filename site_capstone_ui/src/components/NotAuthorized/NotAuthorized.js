import "./NotAuthorized.css"
import Login from "../Login/Login"

export default function NotFound({ user, setAppState })
{
    return (
       <div className="NotFound">
           <div className="splash-image" style={{ backgroundImage: `url(https://images.pexels.com/photos/6061396/pexels-photo-6061396.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)` }}></div>
           <h1>You must be logged in to access this page!</h1>
           <Login user={user} setAppState={setAppState}/>
       </div>
    )
}