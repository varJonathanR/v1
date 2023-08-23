import React from 'react'
import { MainProject } from './StyledComponents'
import img0 from '../assets/edie-homepage-preview.png'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

export default function FeaturedProjects({ liveLink, githubLink }) {
  return (
    <MainProject>
        <img src={img0} alt="" />
        <div className='overlay'>
            <h4>Edie Homepage</h4>
            <p>ASDSHGFHDSGFJAHDGFH</p>
            <td className='tdFlex'>
                <a href={liveLink} aria-label='Demo' className='hover-link' target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight size={20} /></a>
                <a href={githubLink} aria-label='Repository' className='hover-link' target="_blank" rel="noopener noreferrer"><BsGithub size={20} /></a>
            </td>
        </div>
    </MainProject>
  )
}
