import React from 'react';

const page = () => {
  return (
    <div className=''>
        <div className='flex container flex-col justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='border trac_box mb-2 py-6 w-[350px] px-10 rounded-lg'>
                <p className='text-md'>Card Transactions</p>
                <p className='text-sm text-slate-400'>Total with debit card</p>
                <p className='text-2xl font-semibold'>$2,050</p>
            </div>
            <div className='border bg-slate-500 mb-2 py-6  w-[350px]  px-10 rounded-lg'>
                <p className='text-md text-white'>Crypto Transactions</p>
                <p className='text-sm text-slate-400'>Total with Cryptos</p>
                <p className='text-2xl text-white font-semibold'>$9,100</p>
            </div>
            <div className='border trac_box py-6 mb-2  w-[350px]  px-10 rounded-lg'>
                <p className='text-md'>Total Transaction</p>
                <p className='text-sm text-slate-400'>All transaction</p>
                <p className='text-2xl font-semibold'>$11,150</p>
            </div>
        </div>
        <div className=' mt-20 flex justify-center items-center'>
        <p></p>
        <table className='table-auto tab-auto w-[1180px]'>
            <thead className='border rounded-lg'>
                <tr>
                    <th className='border rounded-lg px-10 py-2'>TrancID</th>
                    <th className='border px-10 py-2'>Emails</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border px-10 py-2'>390920</td>
                    <td className='border px-10 py-2'>mich@gmail.com</td>
                   
                </tr>
                <tr>
                    <td className='border px-10 py-2'>290920</td>
                    <td className='border px-10 py-2'>Topiu@gmail.com</td>
                  
                </tr>
                <tr>
                    <td className='border px-10 py-2'>990920</td>
                    <td className='border px-10 py-2'>manchetuor@gmail.com</td>
                  
                </tr>
                <tr>
                    <td className='border px-10 py-2'>390001</td>
                    <td className='border px-10 py-2'>bugaritti@gmail.com</td>
                   
                </tr>
                <tr>
                    <td className='border px-10 py-2'>992101</td>
                    <td className='border px-10 py-2'>jamesbond@gmail.com</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>992901</td>
                    <td className='border px-10 py-2'>bobjane@yahoo.com</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>992001</td>
                    <td className='border px-10 py-2'>koioile@gmail.com</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>990920</td>
                    <td className='border px-10 py-2'>manchetuor@gmail.com</td>
                  
                </tr>
                <tr>
                    <td className='border px-10 py-2'>990920</td>
                    <td className='border px-10 py-2'>manchetuor@gmail.com</td>
                  
                </tr>
                <tr>
                    <td className='border px-10 py-2'>990920</td>
                    <td className='border px-10 py-2'>manchetuor@gmail.com</td>
                  
                </tr>
                <tr>
                    <td className='border px-10 py-2'>990920</td>
                    <td className='border px-10 py-2'>manchetuor@gmail.com</td>
                  
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default page