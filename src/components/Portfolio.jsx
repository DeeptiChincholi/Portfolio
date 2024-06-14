import React from 'react'
import download from '../assets/download.jpg'
import maxresdefault from '../assets/maxresdefault.jpg'
import { Link } from 'react-scroll'
const Portfolio = () => {

    const portfolios = [
        {
            id : 1,
            src : download,
            demo : "https://supermovies.vercel.app ",
            code : 'https://github.com/DeeptiChincholi/movie-site.git'
            
        },
        {
            id : 2,
            src : maxresdefault,
            demo : 'https://deeptichincholi.github.io/WeatherApp/',
            code : 'https://github.com/DeeptiChincholi/WeatherApp.git'
        }
    ]
  return (
    <div name="projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id,src,demo,code}) => (
                       
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                            <a href={demo} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer'>Demo</a>
                            <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer'>Code</a>
                            </div>
                        </div>
                    
                    ))
                }
                </div>
                    
        </div>
    </div>
  )
}

export default Portfolio