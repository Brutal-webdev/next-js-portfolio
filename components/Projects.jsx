import React from 'react'
import placeholder from '../public/assets/projects/placeholder.jpg'
import placeholder1 from '../public/assets/projects/placeholder1.jpg'
import placeholder2 from '../public/assets/projects/placeholder2.jpg'
import placeholder3 from '../public/assets/projects/placeholder3.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-emerald-600'>
                Projects
            </p>
            <h2 className='py-4'>
            </h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='Placeholder' backgroundImg={placeholder} projectUrl='/placeholder' />
                <ProjectItem title='Placeholder' backgroundImg={placeholder1} projectUrl='/placeholder1' />
                <ProjectItem title='Placeholder' backgroundImg={placeholder2} projectUrl='/placeholder2' />
                <ProjectItem title='Placeholder' backgroundImg={placeholder3} projectUrl='/placeholder3' />
            </div>
        </div>
    </div>
  )
}

export default Projects