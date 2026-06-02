import { useState } from "react";
import {Link} from 'react-router-dom'
import {FaCrown} from 'react-icons/fa6'

export default function Navbar() {

    return(
        <>
        <div className="flex justify-between items-center text-[#F8FAFC] font-space p-3 m-4 mx-10 rounded-md bg-[#18181B] border border-[#1F2937]">
            
            <FaCrown className="text-xl ml-10"/>

            <h1 className="text-2xl uppercase font-bold font-mono">Portfolio</h1>

            <div className='flex gap-8 items-center justify-center text-lg'>
                <a href='#home' className="hover:text-purple-300">Home</a>
                <a href='#about' className="hover:text-purple-300">About</a>
                <a href='#works' className="hover:text-purple-300">Works</a>
                <a href='#contact' className="hover:text-purple-300">Contact</a>
               </div>
        </div>
        </>
    )
}