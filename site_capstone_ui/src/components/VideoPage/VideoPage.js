import { useState, useContext } from "react"
import "./VideoPage.css"
import Videos from "../Videos/Videos"
//import ReactYoutube from "../YoutubeCall/YoutubeCall"
//import ModalVideos from "../ModalVideos/ModalVideos"
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function VideoPage({ user, setAppState })
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

    const [ query, setQuery ] = useState("")
    if (!user?.username) {
        return <NotAuthorized user={user} setAppState={setAppState}/>
    } 
    // const [isModalOpen, setModal] = useState(false)
    // const openModal = document.querySelector("#openModalBtn")
    // const modalBg = document.querySelector(".modal-background")
    // const modal = document.querySelector(".modal")

    // openModal.addEventListener('click', () => {
    //     modal.classList.add('is-active')
    // })

    return (
        <div className={`videop ${theme} `}>
        <div className={theme}>
        <ThemeToggler />
        <div className={`VideoPage ${theme} `}>
            <div className={`headerVid ${theme2}`} >
                <h1>Recipe Tutorials</h1>
                
                <h2>Looking For a Recipe? Search For A Recipe Tutorial Here!</h2>
                <div className={`box ${theme2}`}>
                <input type="text" name="query" className ="input " placeholder="Search Ex: Fried Chicken" 
                    onChange={(e) => setQuery(e.target.value)} />
                </div>
                
            </div>
            
            <Videos query={query} />
                {/* <button id="openModalBtn">Open</button>
                
                <div className="modal">
                    <div className="modal-background"></div>
                    <div className="modal-content has-background-white py-5 px-5">
                        <h1>Hey</h1>
                        <button id="closeButton">Close</button>
                    </div>
                </div> */}
            
        </div>
        </div>
        </div>
    )
}