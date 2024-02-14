import { useContext } from 'react';
import { AppContext } from '@/app/contexts/themeContext';

export default function Table() 
{
    const { data } = useContext(AppContext); // Destructure data from AppContext

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-pink-600 uppercase bg-pink-100 dark:bg-gray-700 dark:text-pink-400 rounded-t-lg">
                    <tr>
                        <th scope="col" className="px-6 py-3 rounded-tl-lg">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Partner
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Compatibility
                        </th>
                        <th scope="col" className="px-6 py-3 rounded-tr-lg">
                            Comments
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item:any, index:any) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-pink-50 dark:hover:bg-gray-600 transition duration-300">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                {item.partner}
                            </td>
                            <td className="px-6 py-4">
                                {item.chances}
                            </td>
                            <td className="px-6 py-4">
                                {item.comment}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
