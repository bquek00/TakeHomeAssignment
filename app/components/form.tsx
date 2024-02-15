import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from '@/app/contexts/themeContext';
import Loader from '@/app/components/loader';

// Interface defining the props for the Form component
interface FormProps {
  isVisible: boolean;
  setVisibility: (isVisible: boolean) => void;
}

const Form: React.FC<FormProps> = ({ isVisible, setVisibility }) => 
{
    const [name, setName] = useState('');
    const [partner, setPartner] = useState('');
    const [minDate, setMinDate] = useState('');
    const [loading, setLoading] = useState(false);
    const { data, setData } = useContext(AppContext); // Destructure data from AppContext


    useEffect(() => 
    {
        const today = new Date().toISOString().split('T')[0];
        setMinDate(today);
    }, []);

    async function calculate(name: String, partner: String) 
    {
        setLoading(true);
        try 
        {
            const response = await fetch(`/api/calculate?name=${name}&partner=${partner}`); // Replace 'your-endpoint' with the actual endpoint URL
            if (!response.ok) 
            {
                throw new Error(`Request failed with status: ${response.status}`);
            }
          
            const result = await response.json();
            console.log(result);
            // Create a new item object
            const newItem = { name, partner, chances: result.percentage.concat('%'), comment: result.result}; 

            setData([...data, newItem]);
        }
        catch (error) 
        {
            console.error('Error fetching data:', error);
            throw error;
        }
        setLoading(false);
    }

    const handleClose = () => 
    {
        setVisibility(false); // Hide the modal
        // Reset form values
        setName('');
        setPartner('');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => 
    {

        
        event.preventDefault(); // Prevents the default form submission behavior
        calculate(name, partner);
        setVisibility(false);

        setName('');
        setPartner('');
    };

    return (
        <div className={`absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center ${isVisible ? 'visible' : 'invisible'}`}>
            <form className="relative pb5 mx-auto bg-white dark:bg-gray-700 w-4/5 p-4 border-neutral-950 dark:border-slate-300 border-2 rounded-md" onSubmit={handleSubmit}>
                <button type="button" onClick={handleClose} className="absolute top-0 right-0 m-2 text-gray-400 hover:text-gray-600">
                    <span className="text-2xl">&times;</span>
                </button>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="partner" id="partner" value={partner} onChange={(e) => setPartner(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="partner" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Partner</label>
                </div>
                <button type="submit" className="m-2 p-2 border-2 border-pink-500 dark:border-pink-300 dark:text-pink-300 dark:hover:bg-pink-300 dark:hover:text-gray-900 text-pink-500 hover:text-pink-100 hover:bg-pink-500 rounded-full transition duration-300">Submit</button>
            </form>
            <Loader visibility={loading} />
        </div>
    );
};

export default Form;
