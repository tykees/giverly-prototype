import React from 'react';

const page = () => {
  return (
    <div className='container mx-auto mt-40'>
        <p className='text-2xl font-bold'>Brand Transactions</p>
        <div className='flex container flex-col justify-around md:flex-row md:px-6 mx-auto pt-10 space-y-0 md:space-y-0'>
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
                    <th className='border px-10 py-2'>Purchase</th>
                    <th className='border px-10 py-2'>Payment Method</th>
                    <th className='border px-10 py-2'>Amount</th>
                    <th className='border px-10 py-2'>Discount</th>
                    <th className='border px-10 py-2'>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border px-10 py-2'>390920</td>
                    <td className='border px-10 py-2'>Bags</td>
                    <td className='border px-10 py-2'>Bitcoin</td>
                    <td className='border px-10 py-2'>$4002.3</td>
                    <td className='border px-10 py-2'>50%</td>
                    <td className='border px-10 py-2'>13-04-2024</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>290920</td>
                    <td className='border px-10 py-2'>Shoes</td>
                    <td className='border px-10 py-2'>Card</td>
                    <td className='border px-10 py-2'>$1090.3</td>
                    <td className='border px-10 py-2'>10%</td>
                    <td className='border px-10 py-2'>12-04-2024</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>990920</td>
                    <td className='border px-10 py-2'>Cloths</td>
                    <td className='border px-10 py-2'>Bitcoin</td>
                    <td className='border px-10 py-2'>$2002.3</td>
                    <td className='border px-10 py-2'>20%</td>
                    <td className='border px-10 py-2'>9-04-2024</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>390001</td>
                    <td className='border px-10 py-2'>Gaame</td>
                    <td className='border px-10 py-2'>Bitcoin</td>
                    <td className='border px-10 py-2'>$100.3</td>
                    <td className='border px-10 py-2'>15%</td>
                    <td className='border px-10 py-2'>6-04-2024</td>
                </tr>
                <tr>
                    <td className='border px-10 py-2'>99201</td>
                    <td className='border px-10 py-2'>Books</td>
                    <td className='border px-10 py-2'>Bitcoin</td>
                    <td className='border px-10 py-2'>$900.3</td>
                    <td className='border px-10 py-2'>35%</td>
                    <td className='border px-10 py-2'>1-04-2024</td>
                </tr>
           
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default page