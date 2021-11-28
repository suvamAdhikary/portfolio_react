import { createContext, useState } from "react";
import { Theme } from "../Components/styles/Theme";



export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {

    const { light, dark } = Theme;

    const [theme, setTheme] = useState("light");
    const [colors, setColors] = useState(light);

    const toggleTheme = (theme) => {

        if(theme === "light"){
            setTheme("dark");
            setColors(dark);
        } else {
            setTheme("light");
            setColors(light);
        };
    };

    const value = {theme, toggleTheme, colors}

    return <ThemeContext.Provider
        value={value}
    >
        {children}
    </ThemeContext.Provider>

}