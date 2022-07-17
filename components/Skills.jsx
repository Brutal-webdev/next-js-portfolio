import React from 'react'
import Image from 'next/image'
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'
import javaScriptImg from '../public/assets/skills/javascript.png'
import reactImg from '../public/assets/skills/react.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import firebaseImg from '../public/assets/skills/firebase.png'
import githubImg from '../public/assets/skills/github1.png'
import nodeImg from '../public/assets/skills/node.png'
import nextImg from '../public/assets/skills/nextjs1.png'
import graphImg from '../public/assets/skills/graphql.png'


const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-emerald-600'>Skills</p>
            <h2 className='py-4'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={htmlImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={cssImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javaScriptImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={reactImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwindImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={firebaseImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Firebase</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto dark:bg-white dark:rounded-full dark:p-0.5'>
                            <Image src={githubImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nodeImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NodeJs</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto dark:bg-white dark:rounded-full dark:p-0.5'>
                            <Image src={nextImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Next.js</h3>
                        </div>
                    </div>
                </div>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:shadow-sm dark:shadow-gray-600'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={graphImg} width='64' height='64' alt='/' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>GraphQL</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills