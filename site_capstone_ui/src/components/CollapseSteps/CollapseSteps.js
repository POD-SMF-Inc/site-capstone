import React, { useState, useContext } from "react"
import "./CollapseSteps.css"
import { ThemeContext } from "../../contexts/ThemeContext";

export default  function CollapseSteps(props)
{
    const context = useContext(ThemeContext);
    //const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
    const [ isOpen, setIsOpen ] = useState(false)

    return (
        <div className={`collapseSteps `}>
            <button className={`toggleSteps `} onClick={() => setIsOpen(!isOpen)}>
                {props.label}
            </button>
            {isOpen && <div className={`collapseInfoSteps ${theme2}`}>{props.children}</div>}
        </div>
    )
}