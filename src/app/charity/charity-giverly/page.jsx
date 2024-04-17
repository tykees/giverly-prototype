import React from 'react';

const page = () => {
  return (
    <div className=''>
        <p>Donation from Giverly</p>
        <div className='flex container flex-col justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0 mt-40'>
            <div className='border trac_box mb-2 py-6 w-[350px] px-10 rounded-lg'>
                <p className='text-md'>Total Donation</p>
                <p className='text-sm text-slate-400'>Total with debit card</p>
                <p className='text-2xl font-semibold'>$5,050</p>
            </div>
            <div className='border bg-slate-500 mb-2 py-6  w-[350px]  px-10 rounded-lg'>
                <p className='text-md text-white'>Crypto Donation</p>
                <p className='text-sm text-slate-400'>Total with Cryptos</p>
                <p className='text-2xl text-white font-semibold'>$3,050</p>
            </div>
            <div className='border trac_box py-6 mb-2  w-[350px]  px-10 rounded-lg'>
                <p className='text-md'>Fiat Donation</p>
                <p className='text-sm text-slate-400'>All transaction</p>
                <p className='text-2xl font-semibold'>$2,000</p>
            </div>
        </div>
        <div className=' mt-20 flex justify-center items-center'>
        <p></p>
        <table className='table-auto tab-auto w-[1180px]'>
            <thead className='border rounded-lg'>
                <tr>
                    <th className='border rounded-lg px-10 py-2'>TrancID</th>
                    <th className='border px-10 py-2'>Donation</th>
                    <th className='border px-10 py-2'>Donation Method</th>
                    <th className='border px-10 py-2'>Amount</th>
                    <th className='border px-10 py-2'>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border px-10 py-2'>390920</td>
                    <td className='border px-10 py-2'>Bags</td>
                    <td className='border px-10 py-2'>Bitcoin</td>
                    <td className='border px-10 py-2'>$4002.3</td>
                    <td className='border px-10 py-2'>13-04-2024</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>290920</td>
                    <td className='border px-10 py-2'>Shoes</td>
                    <td className='border px-10 py-2'>Card</td>
                    <td className='border px-10 py-2'>$1090.3</td>
                    <td className='border px-10 py-2'>12-04-2024</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>990920</td>
                    <td className='border px-10 py-2'>Cloths</td>
                    <td className='border px-10 py-2'>Bitcoin</td>
                    <td className='border px-10 py-2'>$2002.3</td>
                    <td className='border px-10 py-2'>9-04-2024</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>390001</td>
                    <td className='border px-10 py-2'>Gaame</td>
                    <td className='border px-10 py-2'>Bitcoin</td>
                    <td className='border px-10 py-2'>$100.3</td>
                    <td className='border px-10 py-2'>6-04-2024</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>99201</td>
                    <td className='border px-10 py-2'>Books</td>
                    <td className='border px-10 py-2'>Bitcoin</td>
                    <td className='border px-10 py-2'>$900.3</td>
                    <td className='border px-10 py-2'>1-04-2024</td>
                </tr>
           
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default page