import React from 'react'
import img0 from '../assets/edie-homepage-preview.png'
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import { styled } from "styled-components";

export default function FeaturedProjects({ liveLink, githubLink }) {
  return (
    <MainProject>
        <img src={img0} alt="" />
        <div className='overlay'>
            <h4>Edie Homepage</h4>
            <p>ASDSHGFHDSGFJAHDGFH</p>
            <td className='tdFlex'>
                <a href={liveLink} aria-label='Demo' className='hover-link' target="_blank" rel="noopener noreferrer"><BsBoxArrowUpRight className='fixed-icon' /></a>
                <a href={githubLink} aria-label='Repository' className='hover-link' target="_blank" rel="noopener noreferrer"><BsGithub className='fixed-icon' /></a>
            </td>
        </div>
    </MainProject>
  )
}

const MainProject = styled.div`
    display: flex;
    width: 100%;
    margin: 2rem auto;
    align-items: center;
    justify-content: center;

    img{
        width: 60%;
        height: auto;
        opacity: .9;
        border-radius: 5px;
    }

    .overlay{
        width: 40%;
        height: 200px;
        padding: 1rem;
        border-radius: 3px;
        background-color: rgba(17, 34, 64, 0.9);
        margin-left: -100px;
        z-index: 1;
    }

    h4{
        color: var(--tertiary-color);
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
    }
    p{
        width: 100%;
    }
`