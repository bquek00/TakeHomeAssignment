'use client';
import Table from '@/app/components/table';
import { AppContext } from '@/app/contexts/themeContext';
import { createContext, useContext} from 'react';

export default function Home() 
{
    const {darkMode, setDarkMode} = useContext(AppContext);
    const toggleDarkMode = () => 
    {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? 'dark' : ''}`}>
            <div className='flex items-center justify-center h-screen dark:bg-black'>
                <Table />
            </div>

            <button 
                onClick={toggleDarkMode} 
                className="absolute top-0 right-0 m-4 p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
            >
                Toggle Dark Mode
            </button>

        </div>
        
    );
}
