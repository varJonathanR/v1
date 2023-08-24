import React from 'react'
/* import FeaturedProjects from '../components/FeaturedProjects' */
import BBProjects from '../components/BBProjects'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <motion.div 
      className="Projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className='container'>
        <h1>Projects</h1>
        {/* <h3>Featured Projects</h3>
        <FeaturedProjects />
        <hr /> */}
        <h3 className='centered-text'>Building Block Projects</h3>
        <p className="centered-text">
          <Link to="/archive" className='buttonA'>
            View Full List of Projects
          </Link>
        </p>
        <BBProjects />
        <hr />
        <Skills />
      </div>
    </motion.div>
  )
}
