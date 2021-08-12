import "./NotAuthorized.css"
import Login from "../Login/Login"

export default function NotFound({ user, setAppState })
{
    return (
       <div className="NotFound">
           <h1>You must be logged in to access this page!</h1>
           <Login user={user} setAppState={setAppState}/>
       </div>
    )
}