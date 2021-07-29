import "./VideoLR.css"

export default function VideoLR({ videos })
{
    console.log("video route: ", videos)
    return (
        <div className="VideoLR">
            {
                videos?.map(element => (
                    <>
                            <h1>{element.title}</h1>
                    </>
                ))
            }
        </div>
    )
}