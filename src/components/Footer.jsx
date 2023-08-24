import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { styled } from "styled-components";

const PageFooter = styled.footer`
    color: var(--secondary-color);
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-family: 'Roboto', sans-serif;

    p{
        width: 100%;
        margin: .6rem;
    }

    .linksContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`

export default function Footer() {
  return (
    <PageFooter>
        <p>Designed and Built by varJonathanR</p>
        <div className="linksContainer">
            <a href="https://github.com/varJonathanR" aria-label='GitHub' target="_blank" rel="noopener noreferrer" className='hover-link'><BsGithub className='fixed-icon' /></a>
            <a href="https://www.linkedin.com/in/jonathanrodriguez04" aria-label='LinkedIn' target="_blank" rel="noopener noreferrer" className='hover-link'><BsLinkedin className='fixed-icon' /></a>
            <a href="https://twitter.com/varJonathanR" aria-label='Twitter' target="_blank" rel="noopener noreferrer" className='hover-link'><BsTwitter className='fixed-icon' /></a>
        </div>
    </PageFooter>
  )
}
