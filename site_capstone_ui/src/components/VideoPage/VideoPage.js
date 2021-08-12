import { useState } from "react"
import "./VideoPage.css"
import Videos from "../Videos/Videos"
import ReactYoutube from "../YoutubeCall/YoutubeCall"
import ModalVideos from "../ModalVideos/ModalVideos"
import NotAuthorized from "../NotAuthorized/NotAuthorized"
export default function VideoPage({ user, setAppState })
{
    const [ query, setQuery ] = useState("")
    if (!user?.username) {
        return <NotAuthorized user={user} setAppState={setAppState}/>
    } 

    return (
        <div className="VideoPage">
            <div className="headerVid">
                <h1>Recipe Tutorials</h1>
                <h2>Looking For a Recipe? Search For A Recipe Tutorial Here!</h2>
                <input id="searching" type="text" name="query" placeholder="Search Ex: Fried Chicken" 
                    onChange={(e) => setQuery(e.target.value)} />
            </div>
            <Videos query={query} />
        </div>
    )
}