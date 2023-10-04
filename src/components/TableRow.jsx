import React from 'react'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

export default function TableRow({ year, projectTitle, technologies, liveLink, githubLink }) {
  return (
    <tr>
        <td className='project-year'>{year}</td>
        <td className='project-title'>{projectTitle}</td>
        <td>{technologies}</td>
        <td className='tdFlex'>
            <a href={liveLink} title='Demo' className='hover-link' target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight className='fixed-icon' /></a>
            <a href={githubLink} title='Code' className='hover-link' target="_blank" rel="noopener noreferrer"><BsGithub className='fixed-icon' /></a>
        </td>
    </tr>
  )
}
