import React from 'react'
import bowl from '../../assets/foodbowl.png'
const Hero = () => {
  return (
    <div>
        <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]'>
            {/* text Section */}
            <div className='flex flex-col justify-center gap-5 text-center md:text-left pt-24 pb-10 md:p-0'>
                <h1 className='text-3xl font-semibold text-white'>
                   Delicious Food is waiting for you
                </h1>
                <p className='font-semibold text-white'>
                When describing food content, "feeling the aroma" means that the writing should vividly evoke the smell of the food, allowing the reader to almost experience the scent as if they were physically present and able to smell it, creating a more immersive and tantalizing reading experience
                </p>
                <div className='flex gap-4 items-center md:justify-start justify-center'>
                    <button className='primary-btn'>Food Menu</button>
                    <button className='secondary-btn'>Book Table</button>
                </div>
            </div>
              {/* image section */}
              <div className='flex flex-col justify-center'>
                <img src={bowl} className='object-cover rounded-full' alt=""/>
              </div>
           
        </div>
    </div>
  )
}

export default Hero