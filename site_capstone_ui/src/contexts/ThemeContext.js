import React, { createContext, useState, useEffect } from "react";
//import 'bulma/css/bulma.css';
export const ThemeContext = createContext();

const initialState = {
  isLightTheme: true,
  light: " has-text-black",
  dark: "has-background-black has-text-white",
  navLight: "is-white",
  navDark: "is-dark",
  cardLight: " has-text-black",
  cardDark: "has-background-dark has-text-white",
  backgroundLight:"background-image: url(https://images.pexels.com/photos/4033636/pexels-photo-4033636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);",
  backgroundDark: " background-image: url(https://images.unsplash.com/photo-1583169561558-e02e4f7a73ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80);",
};

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(() => {
    const item = localStorage.getItem('lightTheme') 
    const localTheme = item ? (item === 'true') : true;
    return { ...initialState, isLightTheme: localTheme };
  });
  
  useEffect(() => {
    localStorage.setItem('lightTheme', theme.isLightTheme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevState => ({...prevState, isLightTheme: !prevState.isLightTheme}))
  };

  return (
    <ThemeContext.Provider
      value={{ ...theme, toggleTheme: toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;