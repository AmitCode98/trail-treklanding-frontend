import React from 'react'
import { RiAccountCircleLine } from 'react-icons/ri'

const Header = () => {
    return (
        <section className='flex justify-between items-center py-14 px-20 text-white'>
            {/* Logo */}
            <h1 className='uppercase font-ChronicleDisplay font-bold text-[32px] tracking-wide'>mntn</h1>
          
           {/* Navigation */}
            <nav >
                <ul className='flex gap-10 text-lg font-bold font-Gilroy items-center'>
                    <li>Equipment</li>
                    <li>About us</li>
                    <li>Blog</li>
                </ul>
            </nav>
             {/* Account */}
            <div>
                <a href="" className='flex gap-2 items-center'>
                    <RiAccountCircleLine className='h-6 w-6'/>
                    <span className=' font-bold text-lg font-Gilroy'>Account</span>
                </a>
            </div>
        </section>
    )
}

export default Header;