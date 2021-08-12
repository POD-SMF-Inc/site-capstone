import "./Videos.css"
import { useEffect, useState } from "react"
import APIR from '../../services/apiCalls'
import VideoLR from "../VideoLayoutRoute/VideoLR"
export default function Videos({ query })
{
    const [videos, setVideos] = useState([])

    const handleOnSubmit = async () => {
        const { data, error } = await APIR.getVideo(query)
        
        if (data)
        {
            const videosList = data.videos
            if (videosList)
            {
                setVideos(videosList)
            }
        }

    }


    
    return (
        <div className="Videos">
            <div className="videoBtnSec">
            <button type="submit" className="vidBtn" onClick={handleOnSubmit}>Search</button>
            </div>
            
            <VideoLR videos={videos} />
        </div>
    )
}