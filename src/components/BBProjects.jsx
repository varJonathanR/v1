import React from 'react'
import img0 from '../assets/quote-generator_preview.png'
import img1 from '../assets/edie-homepage-preview.png'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        title: "Quote Generator",
        description: "This React project showcases a Random Quote Generator that utilizes an API to provide a diverse selection of inspirational phrases.",
        technologies: "React · SASS",
        image: img0,
        imageAlt: "Random Quote Generator preview",
        liveLink: "https://quote-generator-varjonathanr.netlify.app/",
        githubLink: "https://github.com/varJonathanR/quote-generator"
    },
    {
        title: "Edie Homepage",
        description: "An elegantly designed React project featuring a simple homepage that offers a seamless user experience and essential information.",
        technologies: "React · SASS",
        image: img1,
        imageAlt: "Edie Homepage preview",
        liveLink: "https://edie-homepage-varjonathanr.netlify.app/",
        githubLink: "https://github.com/varJonathanR/edie-homepage"
    }
];

export default function BBProjects() {
    return (
        <div className="project-cards">
            {projectsData.map((project, i) => (
            <ProjectCard key={i} {...project} />
            ))}
        </div>
    )
}
