import ProjectCard from "../components/ProjectCard"
import { FaArrowRight } from "react-icons/fa6"
import bloggy from '../assets/bloggy.JPG'
import movie from '../assets/movie.JPG'
import quizzy from '../assets/quizzy.JPG'
import resumeiq from '../assets/resumeiq.jpeg'

export default function Works() {
    const projects = [
        {
            img: bloggy,
            link: "https://github.com/Nishant7749/bloggy/tree/main/frontend",
            item1: "React.js",
            item2: "Express", 
            item3: "MongoDB",
            title: "bloggy",
            description: 'Bloggy is a full-stack MERN blogging platform that enables users to create, edit, and delete blog posts through a clean and intuitive interface. The application leverages React for a dynamic frontend, Express.js for backend API handling, and MongoDB for persistent data storage. Built around CRUD operations and RESTful architecture, Bloggy demonstrates practical full-stack development skills and seamless client-server communication.',
        },
        {
            img: quizzy,
            link: "https://github.com/Nishant7749/quizzy/blob/main/src/App.jsx",
            item1: "React.js",
            item2: "TailwindCSS", 
            item3: "JavaScript",
            title: "quizzy",
            description: 'Quizzy is an interactive quiz application built with React, JavaScript, and Tailwind CSS that delivers a fast and engaging learning experience. It features timed questions, real-time progress tracking, instant answer selection, and automated score calculation. Designed with a clean and responsive interface, Quizzy showcases dynamic state management, component-based architecture, and user-centric UI design while demonstrating core React development concepts.'
        },

        {
            img: movie,
            link: "https://github.com/Nishant7749/Movies-Search/blob/main/index.html",
            item1: "HTML",
            item2: "CSS", 
            item3: "JavaScript",
            title: "movies-search",
            description: 'Movie Search App is a lightweight web application that allows users to search for movies and instantly access details such as posters, titles, and release years. Built using HTML, CSS, and JavaScript, the project integrates external movie APIs to fetch and display real-time data dynamically. It demonstrates API consumption, asynchronous JavaScript, DOM manipulation, and responsive UI design to deliver a smooth and interactive user experience.'
        },
{
        img: resumeiq,
        link: "https://github.com/Nishant7749/ResumeIQ-AI",
        item1: "React.js",
            item2: "TailwindCSS", 
            item3: "Antigravity AI",
        title: "ResumeIQ",
        description: "ResumeIQ is a resume analysis and summarization tool that evaluates resume quality, ATS readiness, extracts key skills, and provides actionable improvement suggestions. I built it because job seekers often struggle to identify weaknesses in their resumes and understand how recruiters and ATS systems evaluate them."
}

    ]

    return(
        <>
        <div>
            <div className='flex items-center justify-center'>
                    <div className='w-5 h-5 m-5 rounded-3xl blur-xs bg-purple-400 animate-pulse'></div>
                    <h1 className='text-white font-bold text-3xl font-mono my-10 mr-5'>works</h1>
                    <div className='w-3/4 bg-purple-400 h-0.5'></div>
                </div>

{projects.map((project, index)=> (
    <>
        <ProjectCard index={index} img={project.img} link={project.link} title={project.title} description={project.description} item1={project.item1} item2={project.item2} item3={project.item3}/>

    </>
))}

        <button className='border md:w-1/6 flex items-center justify-center gap-5 border-purple-400 text-gray-400 text-lg p-3 font-space rounded-md cursor-pointer ml-30 mt-10 hover:bg-purple-400 hover:text-white animate-float'><a href="https://github.com/Nishant7749">See More</a> <FaArrowRight className='transition-transform hover:translate-x-1'/></button>
        
        </div>
        </>
    )
}