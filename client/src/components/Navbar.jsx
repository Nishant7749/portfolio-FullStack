import { useState } from "react";
import {Link} from 'react-router-dom'
import {FaCrown} from 'react-icons/fa6'

export default function Navbar() {

    return(
        <>
        <div className="flex justify-between items-center text-[#F8FAFC] font-space p-3 m-4 mx-10 rounded-md bg-[#18181B] border border-[#1F2937]">
            
            <FaCrown className="text-xl ml-10"/>

            <h1 className="text-2xl uppercase font-bold font-mono">Portfolio</h1>

            <div className="flex gap-4 text-xl">
                <Link className="hover:text-blue-200">Home</Link>
                <Link className="hover:text-blue-200">About</Link>
                <Link className="hover:text-blue-200">Works</Link>
                <Link className="hover:text-blue-200 mr-10">Contact</Link>

            </div>
        </div>
        </>
    )
}