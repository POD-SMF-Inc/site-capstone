import React, { useState } from "react"
import "./Collapsible.css"
export default  function Collapsible(props)
{
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className="collapse">
            <button className="toggle" onClick={() => setIsOpen(!isOpen)}>
                {props.label}
            </button>
            {isOpen && <div className="collapseInfo">{props.children}</div>}
        </div>
    )
}