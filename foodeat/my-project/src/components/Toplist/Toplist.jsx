import React from 'react'
import pictag1 from '../../assets/pictag1.png'
import pictag2 from '../../assets/pictag2.png'
import pictag3 from '../../assets/pictag3.png'
import salad from '../../assets/salad.png'

const FoodData=[
    {
        image:pictag1,
        rating:"⭐⭐⭐⭐⭐",
        Price:"Rs 120",
        name:"Foodname"
    },
    {
        image:pictag2,
        rating:"⭐⭐⭐⭐⭐",
        Price:"Rs 210",
        name:"Foodname"
    },
    {
        image:pictag3,
        rating:"⭐⭐⭐⭐⭐",
        Price:"Rs 150",
        name:"Foodname"
    },
    {
        image:salad,
        rating:"⭐⭐⭐⭐⭐",
        Price:"Rs 150",
        name:"Foodname"
    }

]
const Toplist = () => {

  return (
    <>
    <div className='container py-14'>
    <div className='text-center text-orange mb-14 text-red-500'>
        <h1 className='text-3xl font-semibold'>Top List</h1>
        <p>Our Top List</p>
    </div>
    {/* card list */}
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4  text-white'>
        
           {FoodData.map((food,index)=>(<div key={index} className='bg-white/50 p-3 rounded-3xl  hover:scale-110 transition duration-300'>
            {/* flex flex-col items-center gap-3 bg-white p-4 rounded-lg */}
            <img src={food.image} alt="" className='w-24 h-24 object-cover rounded-full'/>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-semibold'>{food.name}</p>
            
             </div>
              <p className='text-red-50'>{food.rating}</p>
                <p>{food.Price}</p>
           </div>))}

            
       
        {/* <div>
            <img src={pictag1} alt=""></img>
             <p>⭐⭐⭐⭐⭐</p>
             <p>Rs 150</p>
             <p>Food Name</p>
        </div>
        <div><img src={pictag2} alt=""></img>
             <p>⭐⭐⭐⭐⭐</p>
             <p>Rs 200</p>
             <p>Food Name</p></div>
        <div><img src={pictag3} alt=""></img>
             <p>⭐⭐⭐⭐⭐</p>
             <p>Rs 175</p>
             <p>Food Name</p></div> */}
    </div>
    </div>
    </>
  )
}

export default Toplist