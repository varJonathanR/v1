import React from 'react'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

export default function TableRow({ year, projectTitle, stack, demoURL, repoURL }) {
  return (
    <tr>
        <td className='project-year'>{year}</td>
        <td className='project-title'>{projectTitle}</td>
        <td>{stack}</td>
        <td className='tdFlex'>
            <a href={demoURL} title='Demo' className='hover-link' target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight className='fixed-icon' /></a>
            <a href={repoURL} title='Code' className='hover-link' target="_blank" rel="noopener noreferrer"><BsGithub className='fixed-icon' /></a>
        </td>
    </tr>
  )
}
