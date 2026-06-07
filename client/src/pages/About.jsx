import standing from '../assets/standing.png'
import { FaDownload } from 'react-icons/fa6'

export default function About() {

    return (
        <>
            <div>
                <div className='flex items-center justify-center'>
                    <div className='w-5 animate-pulse h-5 m-5 rounded-3xl blur-xs bg-purple-400 '></div>
                    <h1 className='text-white font-bold text-3xl font-mono my-10 mr-5'>about-me</h1>
                    <div className='w-3/4 bg-purple-400 h-0.5'></div>
                </div>

                <img className='w-72 h-100 mr-30 float-right relative z-200' src={standing} alt="image" />
                {/* <div className='bg-black z-100 w-20 h-40 blur-lg absolute right-65 top-70'></div> */}
                   <div className='bg-purple-400/50 w-40 h-80 blur-3xl absolute right-40'></div> 

                <div className='flex flex-col gap-4 items-center justify-center mx-10 md:mx-25 my-10'>
                    <p className='text-gray-400 font-space text-xl mb-10'>Hello, I am <span className='text-purple-400 uppercase '>Nishant Chaudhary</span>.</p>
                    <p className='text-gray-400 font-space'>I am a self-taught Web Developer with knowledge of both Frontend and Backend development, based in Haryana, India. I can develop responsive websites from scratch and raise them into modern user-friendly experiences on Web.</p>
                    <p className='text-gray-400 font-space '>Transforming my creativity and knowledge into websites has been my passion for two years. I've been helping various clients to establish their presence online. I always strive to learn about the newest technologies and put them into practice.</p>
                    <p className='text-gray-400 font-space '>Beyond writing code, I enjoy exploring psychology, philosophy, and technology to better understand how people interact with the digital world. I believe great software is not just about clean code—it's about solving real problems, creating meaningful experiences, and continuously learning along the way.</p>
                </div>

                <button className='border md:w-1/6 flex items-center justify-center gap-5 border-purple-400 text-gray-400 text-lg p-3 font-space rounded-md cursor-pointer ml-24 mt-18 hover:bg-purple-400 hover:text-white animate-float'><a className='flex items-center justify-center gap-4' href="/NISHANT_resume.pdf" download>Resume <FaDownload className='hover:text-gray-200'/></a></button>
            </div>
        </>
    )
}