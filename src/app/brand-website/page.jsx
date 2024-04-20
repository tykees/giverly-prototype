"use client"

import React from 'react'
import { ColorRing } from 'react-loader-spinner'


const page = () => {
  return (
    <div>
        <div className='pt-40 flex flex-col justify-center items-center'>
        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
            <p className='text-center pt-10'>Redirecting to the brand website...</p>
        </div>
    </div>
  )
}

export default page