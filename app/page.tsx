'use client';
import Table from '@/app/components/table';
import { AppContext } from '@/app/contexts/themeContext';
import { createContext, useContext, useState } from 'react';
import Form from '@/app/components/form';

export default function Home() 
{
    const { darkMode, setDarkMode } = useContext(AppContext);

    const [showForm, setShowForm] = useState(false);

    const toggleFormVisibility = (visibility: boolean) => 
    {
        setShowForm(visibility);
    };

    const toggleDarkMode = () => 
    {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? 'dark' : ''} love-theme modern-look`}>
            <div className={`flex flex-col items-center justify-center h-screen ${darkMode ? 'bg-gradient-to-r from-gray-700 to-gray-900' : 'bg-gradient-to-r from-pink-200 to-pink-500'}`}>
                <div className="text-center">
                    {/* Adjusted font color for better visibility and consistency in dark mode */}
                    <p className='text-4xl md:text-5xl m-8 dark:text-gray-200 text-pink-600 font-sans'>Love Compatibility Calculator</p>
                    <Table />
                </div>
                <div className="flex flex-wrap justify-center mt-4">
                    <button
                        onClick={() => toggleFormVisibility(true)}
                        className="m-2 p-2 border-2 border-red-500 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-gray-900 text-red-500 hover:text-white hover:bg-red-500 rounded-full transition duration-300"
                    >
                    Add Compatibility
                    </button>
                    <button 
                        onClick={toggleDarkMode} 
                        className="m-2 p-2 border-2 border-pink-500 dark:border-pink-300 dark:text-pink-300 dark:hover:bg-pink-300 dark:hover:text-gray-900 text-pink-500 hover:text-pink-100 hover:bg-pink-500 rounded-full transition duration-300"
                    >
                        💖 Theme
                    </button>
                </div>
            </div>

            <Form isVisible={showForm} setVisibility={toggleFormVisibility}/>
        </div>
    );
}
