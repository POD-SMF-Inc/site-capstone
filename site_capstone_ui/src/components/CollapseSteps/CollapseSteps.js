import React, { useState } from "react"
import "./CollapseSteps.css"
export default  function CollapseSteps(props)
{
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className="collapseSteps">
            <button className="toggleSteps" onClick={() => setIsOpen(!isOpen)}>
                {props.label}
            </button>
            {isOpen && <div className="collapseInfoSteps">{props.children}</div>}
        </div>
    )
}