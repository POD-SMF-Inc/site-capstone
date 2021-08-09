import "./VideoLR.css"
import VideoFormat from "../VideoFormat/VideoFormat"
import youtubeAPI from "../../services/youtubeApi"
import ReactPaginate from "react-paginate"
import { useState, useEffect } from "react"
export default function VideoLR({ videos })
{
    const [videoS, setVideoS] = useState(videos.slice(0, 100))
    console.log("video route: ", videos)
    const [pageNumber, setPageNumber] = useState(0)
    const [ visible, setVisible ] = useState(1)
    useEffect(() => {
        const setVideos = () => {
            setVideoS(videos.slice(0, 100))
        }
        setVideos()
    }, [videos])

    const videosPerPage = 10
    const pagesVisited = pageNumber * videosPerPage
    const displayVideos = videoS.slice(pagesVisited, pagesVisited + videosPerPage).map(element => {
        return(
            <div className="SepVideoPage">
                <VideoFormat element={element} />
                {console.log("elementMApVideo: ", element)}
            </div>
        )
    })

    const pageCount = Math.ceil(videoS.length / videosPerPage)
     const changePage = ({selected}) => {
        setPageNumber(selected)
    }
    return (
        <div className="VideoLR">
            {displayVideos}
            { videos?.length === 0 ? null : <ReactPaginate 
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />}
            {/* {
                videos?.map(element => (
                    <>
                           <VideoFormat element={element} />
                    </>
                ))
            } */}
        </div>
    )
}