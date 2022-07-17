import Image from 'next/image'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {HiSun, HiMoon} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener('scroll', handleShadow);
    },[]);

const {theme, setTheme} = useTheme();
const [mounted, setMounted] = useState(false);
useEffect(()=> setMounted(true), []);
  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-50' : 'fixed w-full h-20 z-50'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#ecf0f3] dark:bg-black'>
            <div>
                <h1 className='text-5xl font-signature ml-2 text-emerald-600 font-myfont'>Brtl</h1>
            </div>
            <div className='flex justify-center items-center'>
                <ul className='hidden md:flex'>
                    <Link href='/#home'>
                        <li className='ml-10 text-sm uppercase'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase'>About</li>
                    </Link>                    
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase'>Skills</li>
                    </Link>                    
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase'>Project</li>
                    </Link>                    
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase'>Contact</li>
                    </Link>
                </ul>
                <div className='flex justify-between items-center'>
                    <div className='rounded-full shadow-md shadow-gray-400 p-2 cursor-pointer mx-8 dark:shadow-sm dark:bg-[#1f2937]' onClick={() => {
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }}>
                        {theme === 'light' ? <HiMoon size={25}/> : <HiSun size={25}/>}
                    </div>
                    <div onClick={handleNav} className='md:hidden cursor-pointer dark:text-[#ecf0f3]'>
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div> 
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 dark:bg-black' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500' } >
                <div>
                    <div className='flex justify-between w-full items-center'>
                        <div>
                            <h1 className='text-5xl font-signature text-emerald-600 font-myfont'>Brtl</h1>
                        </div>
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:shadow-sm dark:bg-[#1f2937]'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90#] py-4'>Lets build something legendary together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                        <Link href='/#home'>
                            <li onClick={()=> setNav(false)} className='py-4 text-small'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li onClick={()=> setNav(false)} className='py-4 text-small'>About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li onClick={()=> setNav(false)} className='py-4 text-small'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li onClick={()=> setNav(false)} className='py-4 text-small'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li onClick={()=> setNav(false)} className='py-4 text-small'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-[30%]'>
                        <p className='uppercase tracking-widest text-emerald-600'>Lets connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80#]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:bg-[#1f2937]'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:bg-[#1f2937]'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:bg-[#1f2937]'>
                                <AiOutlineMail />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 dark:shadow-sm dark:bg-[#1f2937]'>
                                <BsFillPersonLinesFill />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default NavBar