import React from 'react'
import img0 from '../assets/quote-generator_preview.png'
import img1 from '../assets/edie-homepage-preview.png'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        projectTitle: "Quote Generator",
        description: "This React project showcases a Random Quote Generator that utilizes an API to provide a diverse selection of inspirational phrases.",
        stack: "React · SASS",
        imgURL: img0,
        imgALT: "Random Quote Generator preview",
        demoURL: "https://quote-generator-varjonathanr.netlify.app/",
        repoURL: "https://github.com/varJonathanR/quote-generator"
    },
    {
        projectTitle: "Edie Homepage",
        description: "An elegantly designed React project featuring a simple homepage that offers a seamless user experience and essential information.",
        stack: "React · SASS",
        imgURL: img1,
        imgALT: "Edie Homepage preview",
        demoURL: "https://edie-homepage-varjonathanr.netlify.app/",
        repoURL: "https://github.com/varJonathanR/edie-homepage"
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
