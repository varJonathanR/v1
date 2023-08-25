import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='container centered-content'>
      <h1>WHOOPS!</h1>
      <p>Something went wrong. This is embarrasing.</p>
      <Link to="/" className='buttonA'>
        GO HOME
      </Link>
    </div>
  )
}
