import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';



const Navbar = () => {
  return (
    
    <div className='flex items-center justify-between mx-3 h-16'>
      <div className='flex items-center gap-10'>
        <div className='flex items-center gap-2'>
          <div className='p-3 hover:bg-gray-200 rounded-full cursor-pointer'>
          <RxHamburgerMenu />
          </div>
          <img className='w-8' src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="logo" />
          <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
        </div>

      </div>
      <div className='w-[50%] mr-60' >
      <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
      <IoIosSearch size={'24px'} className='text-gray-700'/>

      <input
           type="text"
                            
           placeholder='Search Mail'
           className='rounded-full w-full bg-transparent outline-none px-1'
             />
      </div>
    </div>
    <div className='flex items-center gap-2'>
      <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
    <CiCircleQuestion size={'24px'}/>
      </div>
      <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
    <IoIosSettings  size={'24px'}/>
      </div>
      <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
    <TbGridDots size={'24px'}/>
      </div>
      <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5W0A3vEiI6VlRF9PbvoV9So2gU4KXqRV6LA&s" size="40" round={true} />
    </div>
    </div>
    
)
}

export default Navbar
    
 






