import "./VideoFormat.css"
import ReactYoutube from "../YoutubeCall/YoutubeCall"
import { useState, useEffect } from "react"
import ModalVideos from "../ModalVideos/ModalVideos"
import youtubeAPI from "../../services/youtubeApi"
import React from "react"
import SepVideo from "../SepVideo/SepVideo"
export default function VideoFormat(element)
{
    const [videoInfo, setVideoInfo] = useState({})

    const [isModalOpen, setModal] = useState(false)
    useEffect(() => {
        const fetchVideoInfo = async () => {
            try {
                const { data, error } = await youtubeAPI.getYoutubeInfo(element.element.youTubeId)
                if (data)
                {
                    setVideoInfo(data.items[0])
                }
                
                
            }
            catch(error)
            {
                console.log(error)
            }
        }
        fetchVideoInfo()
    }, [element.element.youTubeId])

    const videoSrc = `https://www.youtube.com/embed/${videoInfo?.id}`;

    return (
        <div className="VideoFormat">
    
            <ModalVideos isModalOpen={isModalOpen} setModal={setModal} videoInfo={videoInfo}/>
            
            <img onClick={() => setModal(!isModalOpen)} src={videoInfo?.snippet?.thumbnails?.medium?.url} alt="youtube video thumbnail"></img>
            <h2>{videoInfo?.snippet?.title}</h2>
            <button
                onClick={() => setModal(!isModalOpen)}
                className="videoButton"
                >
                Play Video
                </button>
        </div>
    )
}