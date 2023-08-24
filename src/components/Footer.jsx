import React from 'react'
import { PageFooter } from './StyledComponents'
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

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
