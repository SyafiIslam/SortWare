import React from 'react'
import Jumbotron from './Jumbotron'
import Sidebar from './Sidebar'

const MainLayout = (props) => {
  return (
    <div className='relative'>
      <Jumbotron title={props.title} />
      
      <div className='flex min-h-screen'>
        <Sidebar toggle={props.toggle} setToggle={props.setToggle} />
        {props.children}
      </div>

    </div>
  )
}

export default MainLayout