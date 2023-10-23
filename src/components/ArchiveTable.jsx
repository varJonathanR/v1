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
                stack="React ·  CSS"
                demoURL="https://todo-app-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/todo-app"
            />
            <TableRow 
                year="2023"
                projectTitle="Random Quote Generator"
                stack="React ·  SASS"
                demoURL="https://quote-generator-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/quote-generator"
            />
            <TableRow 
                year="2023"
                projectTitle="Input Component"
                stack="React · SASS · RRD"
                demoURL="https://input-component-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/input-component"
            />
            <TableRow 
                year="2023"
                projectTitle="Button Component"
                stack="React · SASS · RRD"
                demoURL="https://button-component-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/button-component"
            />
            <TableRow 
                year="2023"
                projectTitle="Edie Homepage"
                stack="React · SASS"
                demoURL="https://edie-homepage-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/edie-homepage"
            />
            <TableRow 
                year="2023"
                projectTitle="Checkout Page"
                stack="React · SASS"
                demoURL="https://checkout-page-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/checkout-page"
            />
            <TableRow 
                year="2023"
                projectTitle="My Gallery"
                stack="HTML · SASS"
                demoURL="https://my-gallery-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/my-gallery"
            />
            <TableRow 
                year="2023"
                projectTitle="Recipe Page"
                stack="HTML · CSS · JS"
                demoURL="https://recipe-page-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/recipe-page"
            />
            <TableRow 
                year="2023"
                projectTitle="Interior Consultant"
                stack="HTML · CSS"
                demoURL="https://interior-consultant-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/interior-consultant"
            />
            <TableRow 
                year="2023"
                projectTitle="My Team Page"
                stack="HTML · CSS"
                demoURL="https://my-team-page-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/my-team-page"
            />
            <TableRow 
                year="2023"
                projectTitle="404 Not Found"
                stack="HTML · CSS"
                demoURL="https://404-not-found-varjonathanr.netlify.app/"
                repoURL="https://github.com/varJonathanR/404-not-found"
            />
        </tbody>
    </table>
  )
}
