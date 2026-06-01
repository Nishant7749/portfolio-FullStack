import { Link } from 'react-router-dom'
import {FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaRegCopyright } from 'react-icons/fa6'
import {CiMail} from 'react-icons/ci'

export default function Footer() {

    return(
        <>
        <div className='bg-gray-800/30 p-5 mt-15 text-gray-400 w-full'>
               <div className='flex gap-5 items-center justify-center mb-4'>
                <Link to='/' className="hover:text-blue-200">Home</Link>
                <Link to='/about' className="hover:text-blue-200">About</Link>
                <Link to='/works' className="hover:text-blue-200">Works</Link>
                <Link to='/contact' className="hover:text-blue-200 mr-10">Contact</Link>
               </div>

               <div className='flex gap-5 items-center justify-center mb-4'>
                  <FaGithub/>
                  <FaLinkedin/>
                  <FaInstagram/>
                  <FaFacebook/>
               </div>

               <div className='flex gap-5 items-center justify-center mb-4'>
                     <CiMail/>nishant7749@gmail.com
                    <FaPhone/>+91 8851135926
               </div>

               <div className='flex items-center justify-center'><FaRegCopyright/>2026 Nishant Chaudhary | Haryana, IN
               </div>
            </div>
        </>
    )
}