import './PageH.css'
import { ThemeContext } from "../../contexts/ThemeContext";
import React, { useContext } from "react";

export default function PageH( {sectionName} ) {
  const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;

  return (
    <div className={`PageH ${theme}`}>{sectionName}</div>
  )
}