import "./Videos.css"
import { useEffect, useState } from "react"
import APIR from '../../services/apiCalls'
import VideoLR from "../VideoLayoutRoute/VideoLR"
export default function Videos({ query })
{
    const [videos, setVideos] = useState([])

    const handleOnSubmit = async () => {
        const { data, error } = await APIR.getVideo(query)
        console.log("data: " , data)
        //console.log(data)
        
        if (data)
        {
            const videosList = data.videos
            //console.log(recipesList)
            //console.log("recipeList: ", recipesList)
            if (videosList)
            {
                setVideos(videosList)
            }
        }
        console.log("videos: ", videos)
    }

    console.log("query: ", query)
    
    return (
        <div className="Videos">
            <button type="submit" onClick={handleOnSubmit}>Search</button>
            <VideoLR videos={videos} />
        </div>
    )
}