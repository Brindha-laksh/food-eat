import React from 'react'
import { FaMobileScreen } from 'react-icons/fa6'
import { MdOutlineFastfood } from 'react-icons/md'
import { MdFoodBank } from 'react-icons/md'
import { CiDeliveryTruck } from 'react-icons/ci'

const OurServices = () => {
  return (
    <div className='container'>
        <div>
        <h1 className='text-3xl font-semibold text-center text-orange-500'>Our Serives</h1>
        </div>
        <div className='grid grid-cols-4 gap-20 justify-around text-white'>
        <div >
           <FaMobileScreen  />
           <p>Online Booking</p>
        </div>
        <div>
            <MdOutlineFastfood />
            <p>Fast Food</p>
        </div>
        <div>
            <MdFoodBank/>
            <p>Healthy Food</p>
        </div>
        <div>
            <CiDeliveryTruck/>
            <p>Delivery</p>
        </div>
        </div>
    </div>
  )
}

export default OurServices