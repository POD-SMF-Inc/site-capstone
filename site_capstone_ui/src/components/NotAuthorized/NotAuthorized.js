import "./NotAuthorized.css"
import Login from "../Login/Login"

export default function NotFound({ user, setUser })
{
    return (
       <div className="NotFound">
           <img src="https://www.freeiconspng.com/thumbs/warning-icon-png/status-warning-icon-png-29.png" alt="Warning Icon"></img>
           <h1>You must be logged in to access this page!</h1>
           <Login user={user} setUser={setUser} />
       </div>
    )
}