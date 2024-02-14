export default function Table() 
{
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
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Something
                        </th>
                        <td className="px-6 py-4">
                    Silver
                        </td>
                        <td className="px-6 py-4">
                    Laptop
                        </td>
                    </tr>
                    
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Something
                        </th>
                        <td className="px-6 py-4">
                    Silver
                        </td>
                        <td className="px-6 py-4">
                    Laptop
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}
  