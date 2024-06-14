import React, { useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll';
const Navbar = () => {

    const [Nav,setNav]=useState(false);
    const links=[
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"projects"
        },
        {
            id:4,
            link:"experience"
        },
        {
            id:5,
            link:"contact"
        },
    ]
  return (
    <div className="flex px-4 justify-between items-center h-20 text-white bg-black fixed w-full ">
    <div>
      <h1 className='text-5xl font-signature ml-2 mt-2'>Deepti Chincholi</h1>
    </div>

    <ul className='hidden md:flex '>
    {
        links.map(({id,link})=>
        (
            <li key={id} className='px-2 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
        ))
    }
    </ul>
    
   
    <div onClick={()=>setNav(!Nav)} className='text-gray-500 pr-1 z-10 cursor-pointer md:hidden'>
    {
        Nav ? <FaTimes size={30}/> : <FaBars size={30}/>
    }
    </div>


    {
        Nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

    {
        links.map(({id,link})=>
        (
            <li key={id} className='px-4 cursor-pointer capitalize py-6 hover:scale-110 duration-200'><Link onClick={()=>setNav(!Nav)} to={link} smooth duration={500}>{link}</Link></li>
        ))
    }
           
    </ul>
        )    
    }
    
    </div>
  )
  
}

export default Navbar