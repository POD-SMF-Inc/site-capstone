import "./Videos.css"
import { useEffect, useState, useContext } from "react"
import APIR from '../../services/apiCalls'
import VideoLR from "../VideoLayoutRoute/VideoLR"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Videos({ query })
{
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
  
    const ThemeToggler = (props) => {
        const context = useContext(ThemeContext);
        const btnText = context.isLightTheme ? "Light ☀️" : "Dark 🌘";
        const toggleTheme = context.toggleTheme;
      
        return (
          <button className={`button is-light rounded`} onClick={toggleTheme}>
            {btnText}
          </button>
        );
      };

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
        <div className={`Videos ${theme}`}>
            <div className="videoBtnSec">
            <button type="submit" className={`vidBtn `} onClick={handleOnSubmit}>Search</button>
            </div>
            
            <VideoLR videos={videos}  />
        </div>
    )
}