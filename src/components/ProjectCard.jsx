import React from 'react'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { styled } from "styled-components";

export default function ProjectCard({ projectTitle, description, stack, imgURL, imgALT, demoURL, repoURL }) {
  return (
    <Card>
        <img src={imgURL} alt={imgALT} loading="lazy" />
        <h3>{projectTitle}</h3>
        <p>{description}</p>
        <div className="specialInfo">
            <p>{stack}</p>
            <td className='tdFlex'>
                <a href={demoURL} title="Demo" target="_blank" className='hover-link' rel="noopener noreferrer"><BsBoxArrowUpRight className='fixed-icon' /></a>
                <a href={repoURL} title="Code" target="_blank" className='hover-link' rel="noopener noreferrer"><BsGithub className='fixed-icon' /></a>
            </td>
        </div>
    </Card>
  )
}

const Card = styled.div`
    max-width: 400px;
    min-width: 250px;
    padding: 1rem;
    background-color: var(--quaternary-color);
    border-radius: 10px;

    h3{
        font-size: 1.2rem;
        margin: 8px 0;
    }

    p{
        margin: 5px 0;
        width: 100%;
    }

    img{
        border-radius: 5px;
    }

    .specialInfo{
        margin-top: 10px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`