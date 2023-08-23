import React from 'react'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

export default function TableRow({ year, title, technologies, liveLink, githubLink }) {
  return (
    <tr>
        <td className='project-year'>{year}</td>
        <td className='project-title'>{title}</td>
        <td>{technologies}</td>
        <td className='tdFlex'>
            <a href={liveLink} aria-label='Demo' className='hover-link' target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={20} /></a>
            <a href={githubLink} aria-label='Repository' className='hover-link' target="_blank" rel="noopener noreferrer"><BsGithub size={20} /></a>
        </td>
    </tr>
  )
}
