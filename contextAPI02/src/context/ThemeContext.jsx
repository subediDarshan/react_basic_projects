import React, {createContext} from "react";
import { useContext } from "react";
import { useState } from "react";

const themeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [themeMode, setThemeMode] = useState('light')


    return (
        <themeContext.Provider value={{themeMode, setThemeMode}}>
            {children}
        </themeContext.Provider>
    )
}


function useTheme() {
    return useContext(themeContext);
}


export {useTheme, ThemeContextProvider}

