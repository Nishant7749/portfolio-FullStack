import { useState } from "react";
import {Link} from 'react-router-dom'
import {FaCrown} from 'react-icons/fa6'

export default function Navbar() {
    const[isOpen, setIsOpen] = useState(false)

    return(
        <>
        <div className="flex justify-between items-center text-[#F8FAFC] font-space p-3 m-4 mx-10 rounded-md bg-[#18181B] border border-[#1F2937]">
            
            <FaCrown className="text-xl ml-10"/>

            <h1 className="text-2xl uppercase font-bold font-mono">Portfolio</h1>

            <div className='hidden md:flex gap-8 items-center justify-center text-lg'>
                <a href='#home' className="hover:text-purple-300">Home</a>
                <a href='#about' className="hover:text-purple-300">About</a>
                <a href='#works' className="hover:text-purple-300">Works</a>
                <a href='#contact' className="hover:text-purple-300">Contact</a>
               </div>

               <div onClick={()=> setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1 bg-none border-none  cursor-pointer">
                  <span className={`block h-1 w-8 bg-white rounded-md transition duration-400 ${isOpen ? 'rotate-45 translate-y-1.5': ''}`}></span>
                  <span className={`block h-1 w-8 bg-white rounded-md transition duration-400 ${isOpen ? 'opacity-0': ''}`}></span>
                  <span className={`block h-1 w-8 bg-white rounded-md transition duration-400 ${isOpen ? '-rotate-45 -translate-y-2': ''}`}></span>
               </div>

                <div className={`md:hidden flex flex-col gap-5 text-white font-space text-xl right-10 top-18 bg-gray-500/10 border border-gray-500/20 absolute  p-4 rounded-md transition duration-800 ease-in  ${isOpen ? 'translate-y-0': '-translate-y-90'}`}>
                <a href='#home' className="hover:text-purple-300">Home</a>
                <a href='#about' className="hover:text-purple-300">About</a>
                <a href='#works' className="hover:text-purple-300">Works</a>
                <a href='#contact' className="hover:text-purple-300">Contact</a>
               </div>

        </div>

        
        </>
    )
}