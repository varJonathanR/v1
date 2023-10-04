import React from 'react'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { styled } from "styled-components";

export default function ProjectCard({ title, description, technologies, image, imageAlt, liveLink, githubLink }) {
  return (
    <Card>
        <img src={image} alt={imageAlt} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="specialInfo">
            <p>{technologies}</p>
            <td className='tdFlex'>
                <a href={liveLink} title="Demo" target="_blank" className='hover-link' rel="noopener noreferrer"><BsBoxArrowUpRight className='fixed-icon' /></a>
                <a href={githubLink} title="Code" target="_blank" className='hover-link' rel="noopener noreferrer"><BsGithub className='fixed-icon' /></a>
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
    border-radius: 5px;

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