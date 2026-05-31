import avatar from '../assets/avatar.png'
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <>
            <div>
                <div>
                    <div className='relative flex'>
                        <div className='absolute bg-purple-400/50 rounded-full blur-3xl w-48 h-48 top-1/2 right-1/2 -translate-x-95 -translate-y-29'></div>
                        <img className='ml-20 mt-10 w-60 h-50 relative z-100' src={avatar} alt="avatar" />

                        <div className='flex flex-col m-10 mt-20 ml-4 w-full'>
                            <h1 className='text-3xl font-roboto font-bold text-white'>Hey, It's <span className='text-purple-400 font-extrabold font-space uppercase'>Nishant Chaudhary</span>!</h1>

                            <p className='text-white text-xl font-inter mt-5 ml-5 border border-purple-400 p-2 w-72 hover:bg-purple-400 hover:text-gray-800'>Complexity is easy to create.</p><p className='text-white text-xl font-inter ml-77 w-72 text-center border border-purple-400 p-2 hover:bg-purple-400 hover:text-gray-800'> Simplicity is engineered.</p>
                        </div>
                    </div>
                </div>



                <div className='flex flex-col-2 gap-65 justify-center items-center'>

                    <div className='flex flex-col'>
                        <button className='mb-4 border border-purple-500/50 p-3 rounded-xl text-white shadow shadow-purple-400/50 hover:bg-purple-400/50 hover:text-gray-900 cursor-pointer'><Link>Contact Me</Link></button>
                        <button className='border border-purple-500/50 p-3 rounded-xl text-white shadow shadow-purple-400/50 hover:bg-purple-400/50 hover:text-gray-900 cursor-pointer'><Link>See My Work</Link></button>
                    </div>
                    
                    <div className=''>

                        <h1 className='text-4xl text-white font-bold font-space mb-6'>I am a Full-Stack Web Developer.</h1>
                        <p className='text-white text-md font-mono w-175 '>Passionate about building modern, scalable, and user-centric web applications. I enjoy transforming ideas into functional digital experiences using technologies like React, Node.js, Express, and MongoDB. Driven by curiosity and continuous learning, I focus on writing clean code, solving real-world problems, and creating products that balance performance, usability, and thoughtful design.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}