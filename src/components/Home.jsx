import React from 'react'
import heroImage2 from '../assets/heroImage2.png'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
      <div className=' max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl mt-20 md:mt-0 font-bold text-white pt-28 md:pt-10'>I'm Frontend Developer</h2>
          <p className='text-gray-500 py-4 '>
            This is my porfolio , where you can get information about my education and projects.
          </p>
          <div>
            <Link to='projects' scroll duration={500} className='ml-1/2 md:ml-0 group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-900 cursor-pointer'>
              Projects
            <span className='ml-2 group-hover:rotate-90 duration-300'><FaArrowAltCircleRight size={25}/></span>
         </Link>
          </div>   
        </div>

        <div>
          <img src={heroImage2} alt='my profile' className= 'rounded-2xl mt-5 mx-auto w-full'></img>
        </div>

      </div>
    </div>
  )
}

export default Home