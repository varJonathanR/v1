import React from 'react'
import { motion } from 'framer-motion'
import ArchiveTable from '../components/ArchiveTable'

export default function Archive() {
  return (
    <motion.div 
        className="Archive"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
    >
        <div className='container'>
          <h1 className='archiveTitle'>TIMELINE</h1>
          <h4>List of things I&apos;ve built</h4>
          <ArchiveTable />
        </div>
    </motion.div>
  )
}
