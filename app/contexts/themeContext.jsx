'use client';
import { createContext, useContext, useState, useEffect} from 'react';
import jsonData from '@/app/data.json'; // Path to JSON

export const AppContext = createContext();

export function AppProvider({ children}) 
{
    const [mount, setMount]= useState(false);
    const [data, setData] = useState([]);

    const [darkMode, setDarkMode] = useState(() => 
    {
        if (typeof window !== 'undefined') 
        {
            return localStorage.getItem('darkMode') === 'true';
        }
        return false; // Default mode
    });

    useEffect(() => 
    {
        setData(jsonData); // Set the imported JSON data into state
        console.log(jsonData);
        setMount(true); // Set mount to true when the component mounts
    }, []);

    useEffect(() => 
    {
        localStorage.setItem('darkMode', darkMode);
        console.log(localStorage.getItem('darkMode'));
    }, [darkMode]);

    return (
        <>
            {mount && (
                <AppContext.Provider value={{ darkMode, setDarkMode, data, setData}}>
                    {children}
                </AppContext.Provider>
            )}
        </>
    );
}