import "./ModalVideos.css"
import { useState, useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { ThemeContext } from "../../contexts/ThemeContext";
export default function ModalVideos(props)
{
    const context = useContext(ThemeContext);
    //const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;

    const { isModalOpen, setModal, videoInfo } = props;
    const modalActive = isModalOpen ? 'is-active ' : '';
    const [videoDetails, setVideoDetails] = useState({})
    const videoSrc = `https://www.youtube.com/embed/${videoInfo?.id}`;

    const resetForm = e => {
        e.preventDefault();
        setModal(!isModalOpen);
      };
    return (
        <div className={`ModalVideos ${theme2}`}>
            <div className={`modal ${modalActive}`}>
                    <div className="modal-background"></div>

                    
                    <div className={`modal-card ${theme2}`}>
                        <header className={`has-text-white modal-card-head is-primary `}>

                        <button
                            className="delete"
                            aria-label="close"
                            onClick={resetForm}
                        ></button>
                        <div className="videoTitle">
                        <h2>{videoInfo?.snippet?.title}</h2>
                        </div>
                        </header>
                        <section className={`modal-content has-background-white py-6 px-6 ${theme2}`}>
                        <div className="videoInfoDesc">
                            <div className="embedVideo">
                                <iframe src={videoSrc} allowFullScreen title="Video player" />
                            </div>
                            <h2>Channel Title: {videoInfo?.snippet?.channelTitle}</h2>
                            <div className="videoDescription">
                                <h2>Description</h2>
                                <p>{videoInfo?.snippet?.description}</p>
                            </div>
                            <div className="tags">
                                <h2>Tags</h2>
                                <p>{videoInfo?.snippet?.tags?.join(", ")}</p>
                            </div>
                            <div className="stats">
                                <h2>Statistics</h2>
                                <p>View Count: {videoInfo?.statistics?.viewCount}</p>
                                <p>Like Count: {videoInfo?.statistics?.likeCount}</p>
                                <p>Dislike Count: {videoInfo?.statistics?.dislikeCount}</p>
                            </div>
                        </div>
                        </section>
                    </div>
            </div>
        </div>
    )
}