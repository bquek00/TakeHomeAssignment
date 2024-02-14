'use client';
import { createContext, useContext, useState, useEffect} from 'react';

export const AppContext = createContext();

export function AppProvider({ children}) 
{
    const [mount, setMount]= useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('darkMode') === 'true';
        }
        return false; // Default mode
    });

    useEffect(() => {
        setMount(true); // This will set mount to true when the component mounts
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
        console.log(localStorage.getItem('darkMode'))
    }, [darkMode]);

    return (
    <>
        {mount && (
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
            </AppContext.Provider>
            )}
    </>
    );
}