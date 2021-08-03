import "./VideoLR.css"
import VideoFormat from "../VideoFormat/VideoFormat"
import youtubeAPI from "../../services/youtubeApi"
import { useState, useEffect } from "react"
export default function VideoLR({ videos })
{
    console.log("video route: ", videos)
    return (
        <div className="VideoLR">
            {
                videos?.map(element => (
                    <>
                           <VideoFormat element={element} />
                    </>
                ))
            }
        </div>
    )
}