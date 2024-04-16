import React from 'react'
import { RxLapTimer } from "react-icons/rx";


const Idealness = () => {
  return (
    <div className='mt-40'>
        <div>
        <RxLapTimer />
         <p className='text-xl'>Still with Us?</p>
         <p className='text-sm'>Privacy is essential, and you&apos;ve been gone a while. We will log you out in 4m 48s unless you confirm you&apos;re still with us.</p>
         <button className='btn-bg'>Continue working</button>
        </div>
    </div>
  )
}

export default Idealness