import React from 'react'
import Image from 'next/image'


const shopItems = [
    {
        // productImg: Img,
        desc: "This is the details of the product",
        price: "$567"
    },

    {
        // productImg: Img,
        desc: "This is the details of the product",
        price: "$567"
    },

    {
        // productImg: Img,
        desc: "This is the details of the product",
        price: "$567"
    },

    {
        // productImg: Img,
        desc: "This is the details of the product",
        price: "$567"
    }

] 

const page = () => {
  return (
    <div>
        <div className='mt-40'>

        </div>
        <div className='flex justify-center items-center'>
            {shopItems.map((item, index)=> (
                <div className='' key={index}>
                    <Image src='' alt=''/>
                    <p>{item.desc}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default page