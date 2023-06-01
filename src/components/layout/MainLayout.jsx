import React from 'react'
import Jumbotron from './Jumbotron'
import Sidebar from './Sidebar'

const MainLayout = ({children ,title}) => {
  return (
    <div className='relative'>
      <Jumbotron title={title} />
      
      <div className='flex min-h-screen'>
        <Sidebar />
        {children}
      </div>

    </div>
  )
}

export default MainLayout