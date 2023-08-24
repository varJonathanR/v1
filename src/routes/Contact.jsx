import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

export default function Contact() {

  return (
    <motion.div 
        className="Contact" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
    >
        <div className='container'>
          <h1 className='centered-text'>Get In Touch</h1>
          <p className="centered-text">
            If you wish to get in touch with me, please fill out the contact form below. I would love to hear from you! I am available for interesting collaborations, exciting projects and challenging job opportunities. You can also follow me on social media to stay in touch. I look forward to speaking with you soon!
          </p>
          <ContactForm />
        </div>
    </motion.div>
  )
}
