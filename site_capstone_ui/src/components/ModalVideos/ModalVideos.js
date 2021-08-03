import "./ModalVideos.css"
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
export default function ModalVideos(props)
{
    const { isModalOpen, setModal, videoInfo } = props;
    const modalActive = isModalOpen ? 'is-active ' : '';
    const [videoDetails, setVideoDetails] = useState({})
    console.log("videoInfo modal: ", videoInfo)
    const videoSrc = `https://www.youtube.com/embed/${videoInfo?.id}`;

    const resetForm = e => {
        e.preventDefault();
        setModal(!isModalOpen);
      };
    return (
        <div className="ModalVideos">
            <div className={`modal ${modalActive}`}>
                    <div className="modal-background"></div>
                    {/* <div className="modal-content has-background-white py-5 px-5"> */}
                    <div className={`modal-card`}>
                        <header className={`has-text-white modal-card-head `}>
                        <button
                            className="delete"
                            aria-label="close"
                            onClick={resetForm}
                        ></button>
                        <div className="videoTitle">
                        <h2>{videoInfo?.snippet?.title}</h2>
                        </div>
                        </header>
                        <section className={`modal-content has-background-white py-6 px-6`}>
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