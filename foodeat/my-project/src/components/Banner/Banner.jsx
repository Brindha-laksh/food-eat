import React from 'react'
import Goodfood from '../../assets/Goodfood.png'
const Banner = () => {
  return (
    <div>
        <div className="container text-white">
        <h1 className="py-10">Food is always Good</h1>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
        <img src={Goodfood} alt="" className='w-50 h-40'/>
        <div>
        <p className='h-100'>Food brings people together on many different levels. It's the nourishment of the soul and body; it's truly love.</p><br/>
        <p>Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity.</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Banner