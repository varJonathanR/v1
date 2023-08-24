import React from 'react'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { Card } from './StyledComponents';

export default function ProjectCard({ title, description, technologies, image, imageAlt, liveLink, githubLink }) {
  return (
    <Card>
        <img src={image} alt={imageAlt} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="specialInfo">
            <p>{technologies}</p>
            <td className='tdFlex'>
                <a href={liveLink} aria-label="Demo" target="_blank" className='hover-link' rel="noopener noreferrer"><BsBoxArrowUpRight className='fixed-icon' /></a>
                <a href={githubLink} aria-label="Repository" target="_blank" className='hover-link' rel="noopener noreferrer"><BsGithub className='fixed-icon' /></a>
            </td>
        </div>
    </Card>
  )
}
