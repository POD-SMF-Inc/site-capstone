import "./VideoLR.css"
import VideoFormat from "../VideoFormat/VideoFormat"
import youtubeAPI from "../../services/youtubeApi"
import ReactPaginate from "react-paginate"
import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";

export default function VideoLR({ videos })
{
    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
  
    const [videoS, setVideoS] = useState(videos.slice(0, 100))
    const [pageNumber, setPageNumber] = useState(0)
    const [ visible, setVisible ] = useState(1)
    useEffect(() => {
        const setVideos = () => {
            setVideoS(videos.slice(0, 100))
        }
        setVideos()
    }, [videos])

    const videosPerPage = 9
    const pagesVisited = pageNumber * videosPerPage
    const displayVideos = videoS.slice(pagesVisited, pagesVisited + videosPerPage).map(element => {
        return(
            <div className="SepVideoPage">
                <VideoFormat element={element} />
            </div>
        )
    })

    const pageCount = Math.ceil(videoS.length / videosPerPage)
     const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    return (
        <div className={`VideoLR ${theme}`}>
            {displayVideos}
            { videos?.length === 0 ? null : <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={`previousBttn ${theme2}`}
                nextLinkClassName={`nextBttn  ${theme2}`}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />}
            
        </div>
    )
}