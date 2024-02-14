import React, { useState, useEffect } from 'react';

// Interface defining the props for the Form component
interface FormProps {
  isVisible: boolean;
  setVisibility: (isVisible: boolean) => void;
}

const Form: React.FC<FormProps> = ({ isVisible, setVisibility }) => 
{
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [minDate, setMinDate] = useState('');

    useEffect(() => 
    {
        const today = new Date().toISOString().split('T')[0];
        setMinDate(today);
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault(); // Prevents the default form submission behavior
        console.log('Submitting', { name, date }); // For demonstration purposes
        //setVisibility(false);

    // If you want to reset the form fields after submission, you can do it here:
    // setName('');
    // setDate('');
    };

    return (
        <div className={`absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center ${isVisible ? 'visible' : 'invisible'}`}>
            <form className="max-w-md mx-auto bg-white w-4/5 p-4 border-neutral-950 dark:border-slate-300 border-2 rounded-md" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Event Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label className="mr-2" htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} min={minDate} required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    );
};

export default Form;
