import React from 'react'
import logo from '../../assets/logo.png'
import { IoIosArrowDown } from 'react-icons/io'
const Navbar = () => {
  return (
    <div className="py-4">
      <div className="container flex justify-between items-center">
    {/* logo Section */}
       <div>
        <p className='text-3xl font-semibold'>Food <span className='text-red-500'>eat</span></p>
       </div>
        {/* Menu Section */}
        <div className='flex justify-center items-center gap-6'>
          <ul className='flex gap-8 hidden sm:flex'>
            <li className=' hover:border-b-2 border-primary '>Home</li>
            <li className='hover:border-b-2 border-primary '>Menu</li>
            <li  className='hover:border-b-2 border-primary '>About</li>
          </ul>
        </div>
        {/* login details */}
        <div className='flex gap-2 items-center'>
          <img src={logo} alt="" className='w-10 rounded-full'/>
          <IoIosArrowDown/>
        </div>
        </div>
    </div>
  )
}

export default Navbar