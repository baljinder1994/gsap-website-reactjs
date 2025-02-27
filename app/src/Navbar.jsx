import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
    const[abc,setAbc]=useState(false)
  return (
    <nav className='bg-[#2d033b] text-white px-6 py-4 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-[#e5b8f4]'>DigiBal</h1>

        <ul className='hidden md:flex space-x-8 text-lg font-bold'>
            <li className='hover:text-[#e5b8f4] transition-all cursor-pointer'>Home</li>
            <li className='hover:text-[#e5b8f4] transition-all cursor-pointer'>About</li>
            <li className='hover:text-[#e5b8f4] transition-all cursor-pointer'>Services</li>
            <li className='hover:text-[#e5b8f4] transition-all cursor-pointer'>Testinomial</li>
              </ul>

              <button className='hidden md:block bg-[#810cab] text-white px-6 py-2 rounded-full '>Get Started</button>
     
            <button onClick={()=> setAbc(!abc)}className='md:hidden text-white'>
              {abc ?   <X/> : <Menu/>}
                </button>

                
      </div>

      {abc &&(
                    <div className='md:hidden mt-4 bg-[#3e065f] p-4 rounded-lg'>
                         <ul className='space-y-4 text-lg text-center'>
            <li className='hover:text-[#e5b8f4] transition-all cursor-pointer'>Home</li>
            <li className='hover:text-[#e5b8f4] transition-all cursor-pointer'>About</li>
            <li className='hover:text-[#e5b8f4] transition-all cursor-pointer'>Services</li>
            <li className='hover:text-[#e5b8f4] transition-all cursor-pointer'>Testinomial</li>
              </ul>
              <button className=' mt-4 w-full bg-[#810cab] text-white px-6 py-2 rounded-full '>Get Started</button>
     
                   </div>
                )}
    </nav>
  )
}

export default Navbar

