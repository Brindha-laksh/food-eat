import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Toplist from './components/Toplist/Toplist'
import backgroundimg from './assets/backgroundimg.png'
import Banner from './components/Banner/Banner'
import OurServices from './components/OurServices/OurServices'

const bgStyle={
  backgroundImage:`url(${backgroundimg})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",

}
const App = () => {
  return (
    <div style={bgStyle}className='overflow-x-hidden'>
      <div className='min-h-screen bg-white-50 backdrop-blur-sm'>
      <Navbar/>
      <Hero/>
      <Toplist/>
      <Banner/>
      <OurServices/>
      </div>
    </div>

  )
}

export default App