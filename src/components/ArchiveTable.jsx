import React from 'react'
import TableRow from './TableRow'

export default function ArchiveTable() {
  return (
    <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Title</th>
                <th>Built with</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            <TableRow 
                year="2023"
                projectTitle="Todo App"
                technologies="React ·  CSS"
                liveLink="https://todo-app-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/todo-app"
            />
            <TableRow 
                year="2023"
                projectTitle="Random Quote Generator"
                technologies="React ·  SASS"
                liveLink="https://quote-generator-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/quote-generator"
            />
            <TableRow 
                year="2023"
                projectTitle="Input Component"
                technologies="React · SASS · RRD"
                liveLink="https://input-component-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/input-component"
            />
            <TableRow 
                year="2023"
                projectTitle="Button Component"
                technologies="React · SASS · RRD"
                liveLink="https://button-component-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/button-component"
            />
            <TableRow 
                year="2023"
                projectTitle="Edie Homepage"
                technologies="React · SASS"
                liveLink="https://edie-homepage-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/edie-homepage"
            />
            <TableRow 
                year="2023"
                projectTitle="Checkout Page"
                technologies="React · SASS"
                liveLink="https://checkout-page-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/checkout-page"
            />
            <TableRow 
                year="2023"
                projectTitle="My Gallery"
                technologies="HTML · SASS"
                liveLink="https://my-gallery-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/my-gallery"
            />
            <TableRow 
                year="2023"
                projectTitle="Recipe Page"
                technologies="HTML · CSS · JS"
                liveLink="https://recipe-page-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/recipe-page"
            />
            <TableRow 
                year="2023"
                projectTitle="Interior Consultant"
                technologies="HTML · CSS"
                liveLink="https://interior-consultant-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/interior-consultant"
            />
            <TableRow 
                year="2023"
                projectTitle="My Team Page"
                technologies="HTML · CSS"
                liveLink="https://my-team-page-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/my-team-page"
            />
            <TableRow 
                year="2023"
                projectTitle="404 Not Found"
                technologies="HTML · CSS"
                liveLink="https://404-not-found-varjonathanr.netlify.app/"
                githubLink="https://github.com/varJonathanR/404-not-found"
            />
        </tbody>
    </table>
  )
}
