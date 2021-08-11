import { useState } from "react"
import "./VideoPage.css"
import Videos from "../Videos/Videos"
import ReactYoutube from "../YoutubeCall/YoutubeCall"
import ModalVideos from "../ModalVideos/ModalVideos"
import NotAuthorized from "../NotAuthorized/NotAuthorized"
export default function VideoPage({ user, setAppState })
{
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
        <div className="VideoPage">
            <div className="headerVid">
                <h1>Recipe Tutorials</h1>
                <h2>Looking For a Recipe? Search For A Recipe Tutorial Here!</h2>
                <input type="text" name="query" placeholder="Search Ex: Fried Chicken" 
                    onChange={(e) => setQuery(e.target.value)} />
            </div>
            
                
                {/* <button id="openModalBtn">Open</button>
                
                <div className="modal">
                    <div className="modal-background"></div>
                    <div className="modal-content has-background-white py-5 px-5">
                        <h1>Hey</h1>
                        <button id="closeButton">Close</button>
                    </div>
                </div> */}
            <Videos query={query} />
        </div>
    )
}