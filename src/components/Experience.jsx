import React from 'react'
import c from '../assets/c.png'
import cpp_logo from '../assets/cpp_logo.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import java from '../assets/java.png'
import react from '../assets/react.png'
import css from '../assets/css.png'
const Experience = () => {

    const experiences = [
        {
            id : 1,
            src : c,
            title : 'C',
            style : 'shadow-blue-900'
        },
        {
            id : 2,
            src : cpp_logo,
            title : 'C++',
            style : 'shadow-blue-400'
        },
        {
            id : 3,
            src : java,
            title : 'JAVA',
            style : 'shadow-red-500'
        },
        {
            id : 4,
            src : javascript,
            title : 'JAVASCRIPT',
            style : 'shadow-yellow-500'
        },
        {
            id : 5,
            src : html,
            title : 'HTML',
            style : 'shadow-orange-500'
        },
        {
            id : 6,
            src : css,
            title : 'CSS',
            style : 'shadow-blue-500'
        },
        {
            id : 7,
            src : react,
            title : 'REACT',
            style : 'shadow-sky-400'
        }
    ]
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-100% md:h-screen'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className='mt-20 md:mt-40 '>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with and languages I know! </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                
           
    {
        experiences.map(({id,src,title,style})=>(
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
        ))
    }
    </div>
            
            
        </div>
    </div>
  )
}

export default Experience