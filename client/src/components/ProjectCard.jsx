


export default function ProjectCard({index, img, title, description, item1, item2, item3, link}) {


    return (
        <>
        
            <div key={index} className="flex md:flex-row flex-col text-gray-400 font-space mb-20">
                
                <div className="flex flex-col  gap-2 w-1/2 md:ml-30">
                <div className="flex gap-4">
                <div className="font-mono font-extrabold text-8xl text-gray-400/10">
                    0{index+1}
                </div>
                <div>
                    <h1 className="font-bold font-space text-2xl text-purple-400 mb-3">{title}</h1>
                    <div className="flex gap-1 md:gap-3 mb-5">
                        <p className="border border-purple-400 rounded-md p-2">{item1}</p> <p className="border border-purple-400 rounded-md p-2">{item2}</p> <p className="border border-purple-400 rounded-md p-2">{item3}</p>
                    </div>
                    </div>
                    </div>
                    
<div>
                    <p className="bg-gray-600/80 p-3 w-90 mx-4 md:mx-0 md:w-full rounded-xl shadow-lg shadow-gray-400/20 animate-float">{description}</p>
                    </div>
                </div>
<div className="flex flex-col ">
                <div className=''>
                    <img className="ml-5 mt-5 md:mt-0 md:ml-3 border border-purple-400/40 shadow-2xl shadow-purple-400/30 w-80 md:w-108 h-64" src={img} alt={title} />
                </div>

                <div>
                    <button className="mr-13 md:mr-0 text-xs animate-float border-2 float-right border-purple-400 p-2 text-gray-400 font-mono cursor-pointer hover:bg-purple-400 hover:text-white font-bold"><a href={link}>Live Demo</a></button>
                </div>
                </div>
            </div>
      
        </>
    )
}