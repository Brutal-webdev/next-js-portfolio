import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-10'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-emerald-600'>
                    About
                </p>
                <h2 className='py-4'>
                    Who I Am
                </h2>
                <p className='py-2 text-gray-600'>
                    // I am not your normal developer
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod error at vel tenetur mollitia dicta dolorem eaque necessitatibus eveniet accusantium! Officia odit quaerat rerum quae animi odio? Earum, repellat eius enim ratione reiciendis quia quas laboriosam error consequatur velit doloremque asperiores voluptate possimus. Non perspiciatis itaque veritatis repellat natus vel!
                </p>
                <p className='py-2 text-gray-600'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione rem illo nam doloremque velit? Vitae iusto animi atque dignissimos. Voluptatum ut a commodi ipsam excepturi necessitatibus. Quibusdam hic unde facilis.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects.
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-500 dark:shadow-sm dark:shadow-gray-600'>
                <Image src={AboutImg} className='rounded-xl' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About