import "./VideoFormat.css"
import ReactYoutube from "../YoutubeCall/YoutubeCall"
import { useState, useEffect, useContext } from "react"
import ModalVideos from "../ModalVideos/ModalVideos"
import youtubeAPI from "../../services/youtubeApi"
import React from "react"
import SepVideo from "../SepVideo/SepVideo"
import { ThemeContext } from "../../contexts/ThemeContext";
export default function VideoFormat(element)
{
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
    const [videoInfo, setVideoInfo] = useState({})

    const [isModalOpen, setModal] = useState(false)
    useEffect(() => {
        console.log("in here")
        const fetchVideoInfo = async () => {
            try {
                const { data, error } = await youtubeAPI.getYoutubeInfo(element.element.youTubeId)
                if (data)
                {
                    console.log("video data: ", data.items[0])
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
    
    console.log("element vid: ", element.element.title)
    const videoSrc = `https://www.youtube.com/embed/${videoInfo?.id}`;
    console.log("video: ", videoInfo)
    return (
        <div className={`VideoFormat ${theme2}`}>
            {/* <SepVideo videoInfo={videoInfo} /> */}
            {/* <div className="videoEmbed">
                <iframe src={videoSrc} allowFullScreen title="Video player" />
            </div>
            <img src={videoInfo.snippet.thumbnails.standard.url} alt="thumbnail for Video" /> */}
            {/* <h3>{element.element.shortTitle}</h3> */}
            <ModalVideos isModalOpen={isModalOpen} setModal={setModal} videoInfo={videoInfo}/>
            
            <img onClick={() => setModal(!isModalOpen)} src={videoInfo?.snippet?.thumbnails?.medium?.url} alt="youtube video thumbnail"></img>
            <h2>{videoInfo?.snippet?.title}</h2>
            <button
                onClick={() => setModal(!isModalOpen)}
                className="videoButton"
                >
                Play Video
                </button>
            {/* <ReactYoutube videoId={element.element.youTubeId}/> */}
        </div>
    )
}