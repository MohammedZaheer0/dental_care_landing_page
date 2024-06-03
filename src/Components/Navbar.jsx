import  React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    let [open,setOpen] =  useState(false);

    return(
        <>

        <div className=' lg:max-w-[85%] max-w-[100%] mx-auto py-[1.5rem] items-center text-center grid lg:grid-cols-5 grid-cols-1 font-bold h-screen lg:h-auto z-[1]' id=''>

            <h2 className='text-[25px] col-span-1  sm:mb-[0] mb-[1rem] absolute lg:static top-6 left-8'>
            57<span className='text-[#90EE90]'>D</span>entcare
            </h2>

            <div className='text-[25px] absolute right-8 top-6 cursor-pointer lg:hidden' onClick={()=>setOpen(!open )}>
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
            </div>

        <ul className={`flex lg:flex-row flex-wrap flex-col lg:mb-[0] mb-[1.5rem] bg-[#FE5E54] lg:bg-[white] items-center pb-[12] absolute lg:static lg:z-auto z-[-1] z-[99] justify-center w-full lg:w-auto transition-all  duration-400 ease-in lg:pb-0 justify-between col-span-3 font-semibold ${open ? 'top-20 lg:py-[0px] py-[80px]  opacity-100' : 'top-[-500px] lg:opacity-100 opacity-0 '}`}>
            <NavLink  activeClass='active' to='/' className='lg:py-1 py-3 hover:text-[gray]'>
                <li>Home</li>
            </NavLink>

            <NavLink  activeClass='active' to='/services' className='lg:py-1 py-3 hover:text-[gray]'>
                <li>Services</li>
            </NavLink>

            <NavLink  activeClass='active' to='/aboutus' className='lg:py-1 py-3 hover:text-[gray]'>
                <li>About Us</li>
            </NavLink>

            <NavLink  activeClass='active' to='/our' className='lg:py-1 py-3 hover:text-[gray]'>
                <li>Why Choose Us</li>
            </NavLink>

            <NavLink  activeClass='active' to='/testimonials' className='lg:py-1 py-3 hover:text-[gray]'>
                <li>Testimonials</li>
            </NavLink>
        </ul>

        <button className='col-span-1'><span className='border-[2px] border-[#90EE90] p-4 rounded-full hover:bg-[#90EE90] duration-300 hidden lg:inline-block'>Contact Us <i className="fa-solid fa-arrow-right rotate-45 ml-[5px]"></i></span></button>

        </div>
        </>        
    )
}

export default Navbar;