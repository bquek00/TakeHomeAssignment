import { useContext } from 'react';
import { AppContext } from '@/app/contexts/themeContext';

export default function Table() 
{
    const { data } = useContext(AppContext); // Destructure data from AppContext

    return (
        <div className="relative overflow-x-auto w-4/6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Event Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Weather
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item: any, index: any) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.name}
                            </th>
                            <td className="px-6 py-4">
                                {item.date}
                            </td>
                            <td className="px-6 py-4">
                                {item.weather}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
