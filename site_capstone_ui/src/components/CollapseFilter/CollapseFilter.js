import React, { useState } from "react"
import "./CollapseFilter.css"
export default  function CollapseFilter(props)
{
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className="collapseFil">
            <button className="toggleFil" onClick={() => setIsOpen(!isOpen)}>
                {props.label}
            </button>
            {isOpen && <div className="collapseInfoFil">{props.children}</div>}
        </div>
    )
}