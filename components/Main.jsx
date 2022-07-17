import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center pt-[30%] sm:pt-0'>
        <div className='max-w-[1240px] w-full h-full mx-auto p2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LETS BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-emerald-600'>Dominic</span></h1>
                <h1 className='py-4 text-gray-700'>
                    A Full-Stack Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a full-stack web developer specializing in building (and occasionally designing) expectional digital experiences. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-sm dark:bg-[#1f2937]'>
                        <FaLinkedinIn size={20}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-sm dark:bg-[#1f2937]'>
                        <FaGithub size={20}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-sm dark:bg-[#1f2937]'>
                        <AiOutlineMail size={20}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:shadow-sm dark:bg-[#1f2937]'>
                        <BsFillPersonLinesFill size={20}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main