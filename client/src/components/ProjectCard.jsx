import bloggy from '../assets/bloggy.jpg'
export default function ProjectCard() {


    return (
        <>
            <div className="flex text-gray-400 font-space mb-20">
                <div className="flex flex-col gap-2 w-1/2 ml-30">
                    <h1 className="font-bold font-space text-2xl text-purple-400 mb-3">bloggy</h1>
                   <div className="flex gap-3 mb-5">
                     <p className="border border-purple-400 rounded-md p-2">React.js</p> <p className="border border-purple-400 rounded-md p-2">Express</p> <p className="border border-purple-400 rounded-md p-2">MongoDB</p>
                   </div>
                   
                    <p className="bg-gray-600/80 p-3 rounded-xl shadow-lg shadow-gray-400/20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores odio repellendus aliquid eaque in atque ab veniam vel ullam provident maiores, cumque officia ut minima accusamus laudantium nam facere quidem.</p>
                </div>

                <div className=''>
                    <img className="rounded-xl  shadow-2xl shadow-purple-400/30 w-108 h-56" src={bloggy} alt="project1" />
                </div>
            </div>
        </>
    )
}