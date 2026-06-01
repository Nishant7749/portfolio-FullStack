import ProjectCard from "../components/ProjectCard"

export default function Works() {

    return(
        <>
        <div>
            <div className='flex items-center justify-center'>
                    <div className='w-5 h-5 m-5 rounded-3xl blur-xs bg-purple-400 '></div>
                    <h1 className='text-white font-bold text-3xl font-mono my-10 mr-5'>works</h1>
                    <div className='w-3/4 bg-purple-400 h-0.5'></div>
                </div>

        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        </div>
        </>
    )
}