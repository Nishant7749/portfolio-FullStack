import { Link } from 'react-router-dom'
import {FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaRegCopyright } from 'react-icons/fa6'
import {CiMail} from 'react-icons/ci'

export default function Footer() {

    return(
        <>
        <div className='bg-gray-800/30 p-5 mt-15 text-gray-400 w-full'>
               <div className='flex gap-8 items-center justify-center mb-6 text-lg'>
                <a href='#home' className="hover:text-purple-300">Home</a>
                <a href='#about' className="hover:text-purple-300">About</a>
                <a href='#works' className="hover:text-purple-300">Works</a>
                <a href='#contact' className="hover:text-purple-300">Contact</a>
               </div>

               <div className='flex gap-5 items-center text-2xl justify-center mb-4'>
                  <a href="https://github.com/Nishant7749"><FaGithub className='border rounded-full p-0.5 hover:text-white cursor-pointer'/></a>
                  <a href="https://www.linkedin.com/in/nishant-chaudhary-55a804297/"><FaLinkedin className='border rounded-full p-0.5 hover:text-white cursor-pointer'/></a>
                  <a href="https://www.instagram.com/nishantchaudhary_7"><FaInstagram className='border rounded-full p-0.5 hover:text-white cursor-pointer'/></a>
                  <a href='mailto:nishant7749@gmail.com'><CiMail className='border rounded-full p-0.5 hover:text-white cursor-pointer'/></a>
               </div>


               <div className='flex items-center justify-center text-sm mt-10'><FaRegCopyright/>2026 Nishant Chaudhary | Haryana, IN
               </div>
            </div>
        </>
    )
}