import { useState } from "react/cjs/react.development"
import "./VideoPage.css"
import Videos from "../Videos/Videos"
export default function VideoPage()
{
    const [ query, setQuery ] = useState("")

    return (
        <div className="VideoPage">
            <h1>Video Tutorials</h1>
            <input type="text" name="query" placeholder="Search Video Tutorial" 
                onChange={(e) => setQuery(e.target.value)} />
            <Videos query={query} />
        </div>
    )
}