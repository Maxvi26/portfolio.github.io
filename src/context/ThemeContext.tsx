import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import type { ReactNode } from "react";

interface ThemeContextType {
    darkMode: boolean;
    toggleTheme: () => void;
}


const ThemeContext = createContext<
    ThemeContextType | undefined
>(undefined);



export const ThemeProvider = ({
    children
}: {
    children: ReactNode
}) => {


    const [darkMode, setDarkMode] = useState(() => {

        const savedTheme = localStorage.getItem("theme");

        return savedTheme === "dark";

    });



    useEffect(() => {

        document.documentElement.classList.toggle(
            "dark",
            darkMode
        );


        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        );


    }, [darkMode]);



    const toggleTheme = () => {

        setDarkMode(prev => !prev);

    };


    return (

        <ThemeContext.Provider
            value={{
                darkMode,
                toggleTheme
            }}
        >

            {children}

        </ThemeContext.Provider>

    );

};



export const useTheme = () => {

    const context = useContext(ThemeContext);


    if (!context) {

        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );

    }


    return context;

};