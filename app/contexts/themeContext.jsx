'use client';
import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children}) 
{
    const [darkMode, setDarkMode] = useState(false);

    return (
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </AppContext.Provider>
    );
}