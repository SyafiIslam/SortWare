import React from 'react'
import Navbar from './Navbar'

const Weblayout = ({children}) => {
  return (
    <div className='bg-neutral-50 min-h-screen box-border'>
      <Navbar />
      {children}
    </div>
  )
}

export default Weblayout