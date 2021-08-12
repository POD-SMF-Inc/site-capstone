import React from "react";

export default function SepVideo(videoInfo)
{
    const videoSrc = `https://www.youtube.com/embed/${videoInfo.videoInfo.id}`;
    return (
        <div className="SepVideo">
            <div className="embedVideo">
                <iframe src={videoSrc} allowFullScreen title="Video player" />
            </div>
            <div className="videoInfo">
                <h4>{videoInfo.videoInfo.snippet.title}</h4>

            </div>
        </div>
    )
}