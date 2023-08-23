import React from 'react'
import HeroImg from '../../../assets/images/homeImg/Heroimg.png'
import Header from '../../../components/header/Header'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className='relative' >
            {/* hero section bg img */}
            <img src={HeroImg} alt="img" className='w-full top-0 absolute' />

            {/* Header and Social Media Section */}
            <div className=' bg-transparent absolute w-full '>
                <Header />


                {/* social media section start here */}
                <div className=' flex justify-between items-center px-20  w-full text-white'>
                    {/* Left side  */}
                    <div className='flex flex-col gap-28 '>
                        <div className='flex items-end'>
                            <span className='transform rotate-90 origin-bottom-left text-lg font-bold font-Gilroy'>Follow us</span>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <a href="#" ><FaInstagram className='w-6 h-6' /></a>
                            <a href="#"><FaTwitter className='w-6 h-6' /></a>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='flex flex-col'>
                        <span className='text-lg font-bold font-Gilroy border-r-4 pr-8 border-backgroundColor pb-10'>
                            Start
                        </span>
                        <div className='flex flex-col gap-10 text-lg font-bold font-Gilroy items-end border-white border-r-4 pr-8'>
                            <span className=''>01</span>
                            <span className=''>02</span>
                            <span className=''>03</span>
                        </div>
                    </div>
                </div>

            </div>



        </section>

    )
}

export default Hero;




