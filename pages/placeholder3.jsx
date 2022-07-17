import React from 'react'
import placeholder3Img from '../public/assets/projects/placeholder3.jpg'
import Image from 'next/image'
import Link from 'next/link'
import {RiRadioButtonFill} from 'react-icons/ri'

const placeholder3 = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={placeholder3Img} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Twitch Clone</h2>
                <h3>React JS / Tailwind / Firebase</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum tempore expedita soluta assumenda, temporibus quia architecto corporis quaerat odio aspernatur provident esse, quisquam sunt quam voluptate error vel? Rerum, sint mollitia iure fuga nulla nemo qui, distinctio ipsam suscipit quidem cupiditate quis ex doloremque culpa sapiente eos cum vero.</p>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <button className='px-8 py-2 mt-4'>Code</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 dark:shadow-sm dark:shadow-gray-600'>
                <div className='p-2'>
                    <p className='text-center font-bold pb-2'>Technologies</p>
                    <div className='grid grid-cols-3 md:grid-cols-1'>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                        </div>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Tailwind</p>
                        </div>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
                        </div>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
                        </div>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Google Api</p>
                        </div>
                        <div>
                            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Zillow Api</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link href='/#projects'>
                <p className='underline cursor-pointer'>Back</p>
            </Link>
        </div>
    </div>
  )
}

export default placeholder3